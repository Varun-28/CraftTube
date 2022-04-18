import React from "react";
import "../styles/navbar.css";
import logo from "../assets/vl-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../utils/theme-context";
import { Link } from "react-router-dom";

function Navbar() {
  const { theme, themeHandler } = useTheme();

  return (
    <nav className="navbar">
      <Link to="/" className="crafttube-logo">
        <img className="crafttube-logo-img" src={logo} alt="crafttube-logo" />
      </Link>
      <div className="search-field p-4 w-100p">
        <input
          className="w-100p search-input"
          type="text"
          style={{ fontFamily: "Arial, FontAwesome" }}
          placeholder="&#xF002;"
        />
      </div>
      <div className="nav-links">
        <Link to="/login" className="mx-4">
          <button
            className={`btn btn-primary ${theme.isLight ? "dark" : "light"}`}
          >
            Login
          </button>
        </Link>
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
