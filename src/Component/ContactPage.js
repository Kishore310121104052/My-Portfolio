import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./ContactPage.css";
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [successMessage, setSuccessMessage] = useState(""); // To show message
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_hcqg05l',    // your service ID
      'template_doy7r3y',   // your template ID
      e.target,
      '78BQ2t_Ay2mTzUnjK'   // your public key
    )
    .then(() => {
      setSuccessMessage("✅ Message sent successfully!");
      setErrorMessage("");
      e.target.reset(); // clears the form
    }, () => {
      setErrorMessage("❌ Message failed to send. Please try again.");
      setSuccessMessage("");
    });
  };

  return (
    <div>
      <Header />

      <div className="contact-page">
        {/* Top banner section */}
        <div className="contact-top-banner">
          <div className="contact-top-text">
            <h1>Contact Me</h1>
            <p>I’m Kishore P, a Full-Stack Developer. Let’s connect to discuss innovative projects, career opportunities, or collaborations in web and software development.</p>
          </div>
        </div>

        <div className="contact-container">
          {/* Left side - info */}
          <div className="contact-left">
            <h2 className="contact-title">Let's Connect</h2>
            <h3 className="contact-subtitle">Get The Best Service</h3>
            <p className="contact-description">
              Reach out to discuss projects, collaborations, or career opportunities. I focus on creating secure, scalable, and user-friendly applications with modern technologies.
            </p>
            <ul className="contact-info">
              <li><i className="fas fa-phone-alt"></i> Ph: +91 63851 43352</li>
              <li><i className="fas fa-envelope"></i> kishorepalani2004@gmail.com</li>
              <li><i className="fas fa-map-marker-alt"></i> Thiruvanmiyur, Chennai, India</li>
            </ul>
          </div>

          {/* Right side - form */}
          <div className="contact-right">
            <div className="contact-right-form">
              <h3>Contact Me</h3>
              <form onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Your Name" required />
                <input type="email" name="user_email" placeholder="Example@email.com" required />
                <input type="text" name="subject" placeholder="Your Message Subject" required />
                <textarea name="message" placeholder="Your Message Here" required></textarea>
                <button type="submit">Send Message</button>
              </form>

              {/* Success / Error Messages */}
              {successMessage && <p className="form-success">{successMessage}</p>}
              {errorMessage && <p className="form-error">{errorMessage}</p>}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
