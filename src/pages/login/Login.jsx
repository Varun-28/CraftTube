import { React, useState } from "react";
import "./login.css";
import { Loading } from "../../components/Components";
import { useTheme } from "../../utils/theme-context";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth-context";
import { useAuthFunctions } from "../../utils/useAuthFunctions.js";

function Login() {
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { authState, authDispatch } = useAuth();
  const { login } = useAuthFunctions();

  const loginHandler = (e) => {
    e.preventDefault();
    login(setLoading);
  };

  return (
    <div className="flex justify-center mt-16 mb-8">
      <div className="login-signup-container flex flex-col gap-y-4">
        <h3>Login</h3>
        <form onSubmit={loginHandler}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Jhondoe@gmail.com"
              required
              value={authState.email}
              onFocus={() => authDispatch({ type: "ERROR", payload: "" })}
              onChange={(e) =>
                authDispatch({ type: "EMAIL", payload: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label className="password-label" htmlFor="password">
              Password
              <button
                className={`eye-btn ${theme.isLight ? "light" : "dark"}`}
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword((val) => !val);
                }}
              >
                {showPassword ? (
                  <i className="fas fa-eye"></i>
                ) : (
                  <i className="fas fa-eye-slash"></i>
                )}
              </button>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="********"
              required
              minLength="8"
              value={authState.password}
              onFocus={() => authDispatch({ type: "ERROR", payload: "" })}
              onChange={(e) =>
                authDispatch({ type: "PASSWORD", payload: e.target.value })
              }
            />
          </div>
          <button
            className={`btn btn-primary ${theme.isLight ? "dark" : "light"}`}
          >
            Login
          </button>
          <button
            className="btn btn-info"
            onClick={() => authDispatch({ type: "TEST-CREDENTIALS" })}
          >
            Test Login
          </button>
        </form>
        <p className="text-md">
          Don't have an account ?{" "}
          <Link to="/signup" className="link">
            SignUp
          </Link>
        </p>
      </div>
      {loading && <Loading />}
    </div>
  );
}

export { Login };
