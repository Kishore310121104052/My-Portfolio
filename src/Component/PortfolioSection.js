import React from "react";
import "./PortfolioSection.css";

const PortfolioSection = () => { 
    const galleryImages = [
        {
            name: "UI/UX Design",
            desc: "Web Technology Using Multipage Portfolio Design",
            url: "https://i.postimg.cc/fW6LqjXh/Screenshot-2025-09-19-232556.png"
        },
        {
            name: "Cloud Web App",
            desc: "Enhanced Password Generator Using Cloud Computing",
            url: "https://i.postimg.cc/3NnHhhR6/Screenshot-34.png"
        },
        {
            name: "Database Management",
            desc: "I Build and Manage Efficient Database Systems",
            url: "https://i.postimg.cc/J08Ft2vL/Gemini-Generated-Image-ohiwmwohiwmwohiw.png"
        },
        {
            name: "WordPress Development",
            desc: "I Develop Dynamic and Customizable User-Friendly WordPress",
            url: "https://i.postimg.cc/yd6HbW69/wordpress.jpg"
        }
    ];

    return (
        <section id="projects" className="portfolio-section">
            <div className="portfolio-left">
                <h4 className="subtitle">Projects</h4>
                <h2 className="title">My Creative Works</h2>
                <p className="description">
                    A showcase of my projects and creative solutions in Full-Stack Development. From cloud-based applications to award-winning systems, I focus on building secure, scalable, and user-friendly experiences that solve real-world problems.
                </p>
            </div>

            <div className="portfolio-right">
                {galleryImages.map((img, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={img.url} alt={img.name} />
                        <div className="overlay">
                            <h3>{img.name}</h3>
                            <p>{img.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PortfolioSection;
