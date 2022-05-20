import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./auth-context.js";
import { useAlert } from "react-alert";

function useAuthFunctions() {
  const alert = useAlert();
  const { authState, authDispatch } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  //login request
  const login = async (setLoading) => {
    try {
      setLoading(true);
      const { data, status } = await axios.post("/api/auth/login", {
        email: authState.email,
        password: authState.password,
      });
      const { encodedToken } = data;
      if (status === 200) {
        alert.show("Login Success", { type: "success" });
        localStorage.setItem("userToken", encodedToken);
        authDispatch({
          type: "USER-DATA",
          payload: { encodedToken },
        });
        authDispatch({ type: "RESET-FORM" });
        navigate(location?.state?.from?.pathname || "/");
      } else if (status === 401) {
        authDispatch({ type: "ERROR", payload: "Invalid Credentials." });
        setTimeout(() => authDispatch({ type: "ERROR", payload: "" }), 4000);
        alert.show("Invalid Credentials.", { type: "error" });
      }
    } catch (err) {
      authDispatch({
        type: "ERROR",
        payload: "Email is not registered.",
      });
      setTimeout(() => authDispatch({ type: "ERROR", payload: "" }), 4000);
      authDispatch({ type: "RESET-FORM" });
      alert.show("Email is not registered.", { type: "error" });
    } finally {
      setLoading(false);
    }
  };
  //logout request
  const logout = () => {
    localStorage.clear();
    authDispatch({ type: "RESET-DATA" });
    navigate("/");
    alert.show("Logout Success", { type: "success" });
  };
  //signup request
  const signup = async (setLoading) => {
    try {
      setLoading(true);
      const { data, status } = await axios.post("/api/auth/signup", {
        email: authState.email,
        password: authState.password,
        name: authState.name,
      });
      const { encodedToken } = data;
      if (status === 201) {
        localStorage.setItem("userToken", encodedToken);
        authDispatch({
          type: "USER-DATA",
          payload: { encodedToken },
        });
        authDispatch({ type: "RESET-FORM" });
        navigate(location?.state?.from?.pathname || "/");
      } else {
        authDispatch({ type: "ERROR", payload: "Something Went Wrong." });
        setTimeout(() => authDispatch({ type: "ERROR", payload: "" }), 4000);
        alert.show("Something Went Wrong.", { type: "error" });
      }
    } catch (err) {
      authDispatch({
        type: "ERROR",
        payload: "Email Already Exists.",
      });
      setTimeout(() => authDispatch({ type: "ERROR", payload: "" }), 4000);
      authDispatch({ type: "RESET-FORM" });
      alert.show("Email Already Exists.", { type: "error" });
    } finally {
      setLoading(false);
    }
  };
  return { login, logout, signup };
}

export { useAuthFunctions };
