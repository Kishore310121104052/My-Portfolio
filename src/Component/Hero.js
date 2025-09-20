// Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      <div className="hero-content">
        <h3 className="hero-subtitle">Full-Stack Developer</h3>
        <h1 className="hero-title">Hello, I'm Kishore P</h1>
        <p className="hero-description">
          I am a passionate Computer Science Engineer and aspiring Full-Stack Developer from Chennai.
          I specialize in building modern, responsive, and scalable web applications using the MERN stack.
        </p>
        <button className="hero-button">
          Download CV <i className="fas fa-download"></i>
        </button>
      </div>
    </section>
  );
};

export default Hero;
