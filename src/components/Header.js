import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      {/* Logo - Left Side */}
      <div className="logo-container">
        <Link to="/" onClick={closeMenu}>
          <img
            src="/images/wet/logo.png"  // <-- Tumhara exact path
            alt="Vama Lifecare Logo"
            className="logo-img"
          />
        </Link>
      </div>

      {/* Hamburger - Mobile Only */}
      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/products" onClick={closeMenu}>Products</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>

       
      </nav>

      {/* Desktop Contact Button - Right Side */}
      <a href="tel:+917304044082" className="contact-btn desktop-only">
        <FontAwesomeIcon icon={faPhone} />
        +91 7304044082
      </a>
    </header>
  );
};

export default Header;