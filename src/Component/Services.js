// src/Component/Services.js
import React, { useEffect, useRef } from "react";
import "./Services.css";

const servicesData = [
  {
    id: "fullstack",
    image:
      "https://i.postimg.cc/YqjNS1Mh/Gemini-Generated-Image-l3drhel3drhel3dr.png",
    title: "Full-Stack Web Development",
    description:
      "I design and develop responsive web applications using the MERN stack (React, Node.js, Express, and MongoDB), ensuring performance, scalability, and usability.",
    icon: "fa-solid fa-code"
  },
  {
    id: "uiux",
    image:
      "https://i.postimg.cc/XqtrqBkC/Gemini-Generated-Image-u066z9u066z9u066.png",
    title: "UI/UX Design",
    description:
      "I create intuitive and modern user interfaces using Figma and Canva, focusing on delivering seamless user experiences with attention to detail.",
    icon: "fa-solid fa-pencil-ruler"
  },
  {
    id: "database",
    image:
      "https://i.postimg.cc/HxRMcNpn/Gemini-Generated-Image-bqb5tjbqb5tjbqb5.png",
    title: "Database Management",
    description:
      "I build and manage efficient database systems with MongoDB and MySQL, optimizing data storage, security, and accessibility for real-world applications.",
    icon: "fa-solid fa-database"
  },
  {
    id: "wordpress",
    image:
      "https://i.postimg.cc/26sq8BwB/Gemini-Generated-Image-uvwg1xuvwg1xuvwg.png",
    title: "WordPress Development",
    description:
      "I develop dynamic and customizable WordPress websites tailored to personal, business, or e-commerce needs.",
    icon: "fa-brands fa-wordpress"
  }
];

const Services = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    // ✅ copy ref to local variable (fixes warning)
    const currentCards = cardsRef.current;
    currentCards.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      currentCards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h5 className="services-subtitle">My Services</h5>
        <h2 className="services-title">What I Do For You</h2>
        <p className="services-intro">
          specialize in building secure, scalable, and user-friendly digital solutions by combining
          full-stack development expertise with strong problem-solving skills.
        </p>

        <div className="services-list">
          {servicesData.map((s, i) => (
            <div
              className="service-card"
              key={s.id}
              ref={(el) => (cardsRef.current[i] = el)}
            >
              {/* Left image */}
              <div className="service-image-box">
                <img src={s.image} alt={s.title} className="service-image" />
              </div>

              {/* Right content */}
              <div className="service-content-box">
                <div className="service-icon-circle">
                  <i className={s.icon}></i>
                </div>
                <h3 className="service-title-text">{s.title}</h3>
                <p className="service-desc">{s.description}</p>

                {/* ✅ Fixed href warning: added your GitHub link */}
                <a
                  href="https://github.com/Kishore310121104052"
                  className="service-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More &gt;&gt;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
