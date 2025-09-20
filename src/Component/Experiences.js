// src/Component/Experiences.js
import React, { useEffect, useRef } from "react";
import "./Experiences.css";

const experiences = [
    {
        id: "exp1",
        role: "Cloud Computing Project",
        description:
            "Built a secure, scalable, and user-friendly password generator application. Integrated cloud storage and hosting for easy access and reliability. Implemented customizable password criteria and advanced security features.",
        company: "Enhanced Password Generator",
        period: "2023 – 2024",
        image:
            "https://i.postimg.cc/9MyC5Wmc/Gemini-Generated-Image-g5civjg5civjg5ci.png",
    },
    {
        id: "exp2",
        role: "Award-Winning Government Project",
        description:
            "Developed an efficient data management system using Python and SQL. Automated reporting to enhance accessibility and decision-making. Awarded 3rd Prize in a government innovation and social impact competition.",
        company: "Marginal Workers Database Management System",
        period: "2023",
        image:
            "https://i.postimg.cc/ZnZZJ1np/Gemini-Generated-Image-ohiwmwohiwmwohiw.png",
    },
    {
        id: "exp3",
        role: "Full-Stack Development Intern",
        description:
            "Developed responsive React frontends and secure REST APIs using Node.js and MongoDB. Worked on real-world MERN stack applications with scalable deployment. Gained hands-on experience in full-stack development best practices.",
        company: "Advancture Learning",
        period: "Jun 2024 – Aug 2024",
        image:
            "https://i.postimg.cc/P5NHfbX3/Gemini-Generated-Image-tp1j42tp1j42tp1j.png",
    },
];

const Experiences = () => {
    const itemsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                    }
                });
            },
            { threshold: 0.18 }
        );

        // copy ref to local var to avoid eslint warning during cleanup
        const currentItems = itemsRef.current;
        currentItems.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            currentItems.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    return (
        <section className="experiences-section" id="experiences">
            <div className="experiences-inner">
                <div className="experiences-heading">
                    <h5 className="experiences-subtitle">My Experiences</h5>
                    <h2 className="experiences-title">Awesome Journey</h2>
                    <p className="experiences-intro">
                        Here’s a look at my journey in Full-Stack Development, highlighting my key projects, internships, and award-winning contributions. I focus on building scalable, secure, and user-friendly applications while continuously learning and innovating in the tech space.
                    </p>
                </div>

                <div className="timeline">
                    <div className="timeline-line" />

                    {experiences.map((exp, i) => {
                        const isLeft = i % 2 === 0; // even index -> text left, image right (like reference)
                        return (
                            <div
                                className={`timeline-item ${isLeft ? "left" : "right"}`}
                                key={exp.id}
                                ref={(el) => (itemsRef.current[i] = el)}
                            >
                                {/* content column */}
                                <div className="content-col">
                                    <h3 className="role-title">{exp.role}</h3>
                                    <p className="role-desc">{exp.description}</p>
                                    <div className="company-row">
                                        <span className="company">{exp.company}</span>
                                        <span className="period">{exp.period}</span>
                                    </div>
                                </div>

                                {/* marker in center */}
                                <div className="marker-wrap">
                                    <div className="marker" />
                                </div>

                                {/* image column */}
                                <div className="image-col">
                                    <img src={exp.image} alt={exp.role} className="exp-image" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
