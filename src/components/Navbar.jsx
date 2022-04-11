import React from 'react';
import "../styles/navbar.css";
import logo from "../assets/vl-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from '../utils/theme-context';
import { Link } from 'react-router-dom';

function Navbar() {

  const {theme, themeHandler} = useTheme();

  return (
    <nav className='navbar'>
      <Link to="/">
        <img className='crafttube-logo' src={logo} alt="crafttube-logo" />
      </Link>
      <button className='btn-theme-change' onClick={themeHandler}
        style={{color: theme.mode.textColor}}
      >
      <FontAwesomeIcon icon={theme.isLight ? faSun : faMoon} />
      </button>
    </nav>
  )
}

export {Navbar};