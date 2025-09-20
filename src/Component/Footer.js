// src/Component/Footer.js
import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <section id="contact" className="footer-section">
    <footer className="footer-section">
      {/* Section 1: CTA */}
      <div className="footer-cta">
        <div className="footer-cta-text">
          <h5 className="footer-subtitle">Let's Talk</h5>
          <h2 className="footer-title">Get In Touch</h2>
          <p className="footer-description">
            I’d love to connect with you for collaborations, projects, or opportunities.  
            Feel free to reach out anytime — I’ll be happy to respond.
          </p>
        </div>
        {/* Updated button to navigate to Contact Page */}
        <Link to="/contact" className="footer-contact-btn">Contact Now</Link>
      </div>

      {/* Section 2: Logo + Nav + Social */}
      <div className="footer-main">
        <div className="footer-logo-section">
          <img
            src="https://i.postimg.cc/MKLdyzDZ/Gemini-Generated-Image-r933uir933uir933-removebg-preview.png"
            alt="Logo"
            className="footer-logo"
          />
          <p className="footer-logo-description">
            Building modern, scalable, and user-centric applications with MERN, Java and SQL.
          </p>
        </div>

        <nav className="footer-nav">
          <ul className="footer-nav-list">
            <li><a href="#home" className="footer-nav-link">Home</a></li>
            <li><a href="#about" className="footer-nav-link">About</a></li>
            <li><a href="#services" className="footer-nav-link">Services</a></li>
            <li><a href="#experiences" className="footer-nav-link">Experiences</a></li>
            <li><a href="#projects" className="footer-nav-link">Projects</a></li>
          </ul>

          {/* ✅ Social icons now inside container */}
          <div className="footer-social-icons">
            <a href="https://github.com/Kishore310121104052" className="social-link github">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:kishorepalani2004@gmail.com" className="social-link gmail">
              <i className="fab fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/kishore-p-developer/?utm_source=chatgpt.comdd" className="social-link linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="tel:6385143352" className="social-link phone">
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </nav>
      </div>

      {/* Section 3: Bottom */}
      <div className="footer-bottom">
        <p>Copyright © 2024 Kishore P. All Rights Reserved.</p>
        <p>Designed & Developed with ❤️ by Kishore P | Passionate Full-Stack Engineer</p>
      </div>
    </footer>
    </section>
  );
};

export default Footer;