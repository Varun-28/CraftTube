import { React, useState, useRef } from "react";
import "./signup.css";
import { useTheme } from "../../utils/theme-context";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth-context";
import { useAuthFunctions } from "../../utils/useAuthFunctions.js";

function Signup() {
  const confirm_password = useRef();
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const { authState, authDispatch } = useAuth();
  const { signup } = useAuthFunctions();

  const signupHandler = (e) => {
    e.preventDefault();
    if (confirm_password.current.value !== authState.password) {
      setErrorMsg(true);
    } else {
      signup();
    }
  };

  return (
    <div className="flex justify-center mt-16 mb-8">
      <div className="login-signup-container flex flex-col gap-y-4">
        <h3>SignUp</h3>
        <form onSubmit={signupHandler}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Jhon Doe"
              required
              minLength="3"
              value={authState.name}
              onFocus={() => authDispatch({ type: "ERROR", payload: "" })}
              onChange={(e) =>
                authDispatch({ type: "NAME", payload: e.target.value })
              }
            />
          </div>
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
          <div className="input-group">
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              placeholder="********"
              ref={confirm_password}
              onFocus={() => setErrorMsg(false)}
            />
            {errorMsg && (
              <p className="error-text text-md">
                Confirm Password doesn't match with the Password.
              </p>
            )}
          </div>
          <button
            className={`btn btn-primary ${theme.isLight ? "dark" : "light"}`}
          >
            SignUp
          </button>
        </form>
        <p className="text-md">
          Already have an account ?{" "}
          <Link to="/login" className="link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export { Signup };
