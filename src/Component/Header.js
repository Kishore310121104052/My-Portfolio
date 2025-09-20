// src/Component/Header.js
import { Link } from "react-router-dom"; 
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-container" id="home">
      <div className="navbar">
        <div className="logo">
          <img
            src="https://i.postimg.cc/MKLdyzDZ/Gemini-Generated-Image-r933uir933uir933-removebg-preview.png"
            alt="Logo"
            className="logo-image"
          />
        </div>

        {/* Hamburger icon */}
        <div 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </div>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li><a href="#home" className="nav-item">Home</a></li>
            <li><a href="#about" className="nav-item">About</a></li>
            <li><a href="#services" className="nav-item">Services</a></li>
            <li><a href="#experiences" className="nav-item">Experiences</a></li>
            <li><a href="#projects" className="nav-item">Projects</a></li>

            {/* Contact with submenu */}
            <li className="nav-item dropdown">
              <a href="#contact" className="nav-link">Contact</a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/contact" className="nav-item">Contact Form Application</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <div className="hireme-button-container">
          <a href="mailto:kishorepalani2004@gmail.com" className="hireme-button">Hire Me!</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
