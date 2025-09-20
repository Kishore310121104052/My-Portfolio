// Hero.js
import React from 'react';
import './Hero.css';
import heroBg from '../assets/images/heropic.jpg'; // ✅ Import your image

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center', // position image at top
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(0.7)',
        height: '100vh', // exactly 1 viewport height
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <div className="hero-content">
        <h3 className="hero-subtitle">Full-Stack Developer</h3>
        <h1 className="hero-title">Hello, I'm Kishore P</h1>
        <p className="hero-description">
          I am a passionate Computer Science Engineer and aspiring Full-Stack Developer from Chennai.
          I specialize in building modern, responsive, and scalable web applications using the MERN stack.
        </p>
        <a
          href="/RESUME-KISHORE-B.E-CSE.pdf"
          download
          className="hero-button"
        >
          Download CV <i className="fas fa-download"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
