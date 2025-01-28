import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import pologo from '../assets/image.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  }
  

  return (
    <header className="header">
      <nav className="nav-container">
        <h1 className="logo">
          <img
            src={pologo}
            alt=""
            style={{ border: "none", borderRadius: "95px", height: "30px",position:"relative",
              top:'5px'
              
             }}
          />
          Portfolio.
        </h1>
        <button className="hamburger" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <ul
          className={`nav-links ${menuOpen ? "active" : ""}`}
          style={{ zIndex: 1 }}
        >
          <li>
            <NavLink
              to="/"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
