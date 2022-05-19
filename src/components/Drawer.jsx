import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/themeContext/theme-context";
import "../styles/drawer.css";

function Drawer() {
  const { theme } = useTheme();
  const navStyleHandler = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#71C9CE" : "",
      color: isActive ? "#222831" : "",
    };
  };
  return (
    <div
      className={`navigation-bar ${
        theme.isLight ? "navigation-bar-light" : "navigation-bar-dark"
      }`}
    >
      <ul className="drawer-list">
        <li className="drawer-list-item">
          <NavLink className="drawer-item" to="/" style={navStyleHandler}>
            <i className="fas fa-home"></i>
            <span className="text-sm">Home</span>
          </NavLink>
        </li>
        <li className="drawer-list-item">
          <NavLink
            className="drawer-item"
            to="/video/videolisting"
            style={navStyleHandler}
          >
            <i className="fas fa-compass"></i>
            <span className="text-sm">Explore</span>
          </NavLink>
        </li>
        <li className="drawer-list-item">
          <NavLink
            className="drawer-item"
            to="/video/playlist"
            style={navStyleHandler}
          >
            <i className="fas fa-stream"></i>
            <span className="text-sm">Playlist</span>
          </NavLink>
        </li>
        <li className="drawer-list-item">
          <NavLink
            className="drawer-item"
            to="/video/history"
            style={navStyleHandler}
          >
            <i className="fas fa-history"></i>
            <span className="text-sm">History</span>
          </NavLink>
        </li>
        <li className="drawer-list-item">
          <NavLink
            className="drawer-item"
            to="/video/liked"
            style={navStyleHandler}
          >
            <i className="fas fa-thumbs-up"></i>
            <span className="text-sm">Liked</span>
          </NavLink>
        </li>
        <li className="drawer-list-item">
          <NavLink
            className="drawer-item"
            to="/video/watchlater"
            style={navStyleHandler}
          >
            <i className="fas fa-clock"></i>
            <span className="text-sm">Watch Later</span>
          </NavLink>
        </li>
        <li className="drawer-list-item">
          <NavLink
            className="drawer-item"
            to="/video/profile"
            style={navStyleHandler}
          >
            <i className="fas fa-user"></i>
            <span className="text-sm">Profile</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export { Drawer };
