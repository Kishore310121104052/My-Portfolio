// src/App.js
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Stats from "./Component/Stats";
import WhyChooseMe from "./Component/WhyChooseMe";
import Services from "./Component/Services";
import Experiences from "./Component/Experiences";
import PortfolioSection from "./Component/PortfolioSection";
import Footer from "./Component/Footer";
import ContactPage from "./Component/ContactPage";

// Page maarum bodhu mela scroll aagum
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Main Portfolio Page */}
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Hero />
              <About />
              <Stats />
              <WhyChooseMe />
              <Services />
              <Experiences />
              <PortfolioSection />
              <Footer />
            </div>
          }
        />

        {/* Contact Page */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;