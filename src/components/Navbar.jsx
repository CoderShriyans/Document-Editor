import React, { useState, useEffect } from "react";
import "./css/Navbar.css";
import "./css/Dark.css";

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState("navbar");
  const [theme, setTheme] = useState("light");

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setNavbarColor("navbar");
    } else if (window.scrollY > 70) {
      return setNavbarColor("navbar scrolled");
    }
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.classList.add("dark");
    } else {
      setTheme("light");
      document.body.classList.remove("dark");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <nav className={`${navbarColor} ${theme}`}>
      <div className="navbar-container">
        <div className="navbar-logo">Document Editor</div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#about" className="navbar-link">
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="#features" className="navbar-link">
              Features
            </a>
          </li>
          <li className="navbar-item">
            <a href="#pricing" className="navbar-link">
              Pricing
            </a>
          </li>
          <button className="navbar-button" onClick={toggleTheme}>
            Toggle theme
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
