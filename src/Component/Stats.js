// src/Components/Stats.js
import React, { useEffect, useRef, useState } from "react";
import "./Stats.css";

const statsData = [
    { number: 2, label: "Years Of Experience" },
    { number: 5, label: "Happy Clients" },
    { number: 10, label: "Projects Completed" },
    { number: 6, label: "Certificates Earned" },
];

const Stats = () => {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const currentRef = sectionRef.current; // ✅ save ref in variable

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) observer.unobserve(currentRef); // ✅ cleanup safely
        };
    }, []);

    return (
        <section className="stats-section" ref={sectionRef}>
            <div className="stats-container">
                {statsData.map((stat, index) => (
                    <StatBox key={index} target={stat.number} label={stat.label} visible={visible} />
                ))}
            </div>
        </section>
    );
};

const StatBox = ({ target, label, visible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (visible) {
            let start = 0;
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 30);

            const counter = setInterval(() => {
                start += increment;
                if (start >= target) {
                    setCount(target);
                    clearInterval(counter);
                } else {
                    setCount(Math.ceil(start));
                }
            }, 30);

            return () => clearInterval(counter);
        }
    }, [visible, target]);

    return (
        <div className="stat-box">
            <h2 className="stat-number">{count}+</h2>
            <p className="stat-label">{label}</p>
        </div>
    );
};

export default Stats;
