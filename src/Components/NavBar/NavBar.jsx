import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = ({ toggleTheme, theme }) => {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1] || "home";

  const links = [
    { id: "home", text: "Home", path: "/" },
    { id: "aboutMe", text: "About me", path: "/aboutMe" },
    { id: "education", text: "Education", path: "/education" },
    { id: "projects", text: "Projects", path: "/projects" },
    { id: "contact", text: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="navbar_logo">
        Roaa
      </Link>

      <ul className="navbar_links">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              to={link.path}
              className={currentPath === link.id ? "active" : ""}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className="theme-toggle-btn"
      >
        <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
      </button>
    </nav>
  );
};

export default Navbar;
