// src/Components/About.js
import React from "react";
import "./About.css";

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                {/* Left column */}
                <div className="about-left">
                    <h2 className="about-title">About Me</h2>
                    <h3 className="about-subtitle">Call Me Kishore</h3>
                </div>

                {/* Center column */}
                <div className="about-center">
                    <p className="about-description">
                        I’m Kishore P, a Computer Science Engineering student passionate about full-stack development.
                        I have worked on projects such as an Enhanced Password Generator and a Marginal Workers Database Management System,
                        where I applied technologies like Java, Python, React, Node.js, and MongoDB.

                        One of my key strengths is the ability to learn quickly and solve problems effectively.
                        I’m eager to contribute, grow, and be part of a forward-thinking organization while building impactful digital solutions.
                    </p>
                </div>

                {/* Right column */}
                <div className="about-right">
                    <div className="about-socials">
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
                </div>
            </div>
        </section>
    );
};

export default About;
