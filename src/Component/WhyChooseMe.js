// WhyChooseMe.js
import React, { useEffect, useRef, useState } from 'react';
import './WhyChooseMe.css';

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
        <section className="why-choose-me-section" ref={sectionRef}>
            <div className="why-choose-me-container">
                <div className="image-container">
                    <img
                        src="https://i.postimg.cc/1R79Z9LS/Gemini-Generated-Image-3hspxa3hspxa3hsp.png"
                        alt="Why Choose Me"
                        className="profile-image"
                    />
                </div>
                <div className="content-container">
                    <h5 className="subtitle">Why Choose Me</h5>
                    <h2 className="title">My Expertise Area</h2>
                    <p className="description">
                        With strong problem-solving skills and a deep interest in software development,
                        I focus on creating impactful projects that combine design and functionality.
                    </p>
                    <div className="expertise-bars">
                        <div className="bar-wrapper">
                            <span className="label">React & MERN Stack</span>
                            <span className="percentage">80%</span>
                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: visible ? '80%' : '0%' }}
                                ></div>
                            </div>
                        </div>
                        <div className="bar-wrapper">
                            <span className="label">Java & JavaScript</span>
                            <span className="percentage">75%</span>
                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: visible ? '75%' : '0%' }}
                                ></div>
                            </div>
                        </div>
                        <div className="bar-wrapper">
                            <span className="label">SQL & Databases</span>
                            <span className="percentage">85%</span>
                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: visible ? '85%' : '0%' }}
                                ></div>
                            </div>
                        </div>
                        {/* ✅ UI/UX Bar Added */}
                        <div className="bar-wrapper">
                            <span className="label">UI/UX Design (Figma)</span>
                            <span className="percentage">85%</span>
                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: visible ? '85%' : '0%' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseMe;
