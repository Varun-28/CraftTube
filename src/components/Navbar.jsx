import React, { useCallback } from "react";
import "../styles/navbar.css";
import logo from "../assets/vl-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/themeContext/theme-context";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthFunctions } from "../context/authContext/useAuthFunctions.js";

function Navbar({ setSearch }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, themeHandler } = useTheme();
  const token = localStorage.getItem("userToken");
  const { logout } = useAuthFunctions();

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (value) => {
    setSearch(value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const optimizedFn = useCallback(debounce(handleChange), []);

  const searchHandler = (e) => {
    e.preventDefault();
    if(location.pathname !== "/video/videolisting"){
      navigate("/video/videolisting");
    }
  }

  return (
    <nav className={`navbar ${theme.isLight ? "navbar-light" : "navbar-dark"}`}>
      <Link to="/" className="crafttube-logo">
        <img className="crafttube-logo-img" src={logo} alt="crafttube-logo" />
      </Link>
      <div className="search-field p-4 w-100p">
        <form className="flex gap-x-2" onSubmit={searchHandler}>
          <input
            className="w-100p search-input"
            type="text"
            style={{ fontFamily: "Arial, FontAwesome" }}
            placeholder="&#xF002;"
            onChange={(e) => optimizedFn(e.target.value)}
          />
        </form>
      </div>
      <div className="nav-links">
        {!token ? (
          <Link to="/login" className="mx-4">
            <button
              className={`btn btn-primary ${theme.isLight ? "dark" : "light"}`}
            >
              Login
            </button>
          </Link>
        ) : (
          <button
            onClick={logout}
            className={`btn btn-primary ${theme.isLight ? "dark" : "light"}`}
          >
            Logout
          </button>
        )}

        <button
          className={`btn-theme-change ${theme.isLight ? "light" : "dark"}`}
          onClick={themeHandler}
        >
          <FontAwesomeIcon icon={theme.isLight ? faSun : faMoon} />
        </button>
      </div>
    </nav>
  );
}

export { Navbar };
