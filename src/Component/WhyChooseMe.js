// src/Component/WhyChooseMe.js
import React, { useEffect, useRef, useState } from 'react';
import './WhyChooseMe.css';
import aboutPic from '../assets/images/aboutpic.png';

const skills = [
    { label: 'React & MERN Stack', value: 80 },
    { label: 'Java & JavaScript', value: 75 },
    { label: 'SQL & Databases', value: 85 },
    { label: 'UI/UX Design (Figma)', value: 85 },
];

const WhyChooseMe = () => {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const currentRef = sectionRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.3 }
        );
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <section className="wcm-section" ref={sectionRef}>
            <div className="wcm-container">
                <div className="wcm-image-container">
                    <img
                        src={aboutPic}
                        alt="Why Choose Me"
                        className="wcm-profile-image"
                    />
                </div>
                <div className="wcm-content-container">
                    <h5 className="wcm-subtitle">Why Choose Me</h5>
                    <h2 className="wcm-title">My Expertise Area</h2>
                    <p className="wcm-description">
                        With strong problem-solving skills and a deep interest in software development,
                        I focus on creating impactful projects that combine design and functionality.
                    </p>
                    <div className="wcm-bars">
                        {skills.map((skill) => (
                            <div className="wcm-bar-wrapper" key={skill.label}>
                                <div className="wcm-bar-header">
                                    <span className="wcm-label">{skill.label}</span>
                                    <span className="wcm-percentage">{skill.value}%</span>
                                </div>
                                <div className="wcm-progress-bar">
                                    <div
                                        className="wcm-progress-fill"
                                        style={{ width: visible ? `${skill.value}%` : '0%' }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseMe;