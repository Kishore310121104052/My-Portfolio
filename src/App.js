import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Stats from "./Component/Stats";
import WhyChooseMe from "./Component/WhyChooseMe";
import Services from "./Component/Services";
import Experiences from "./Component/Experiences";
import PortfolioSection from "./Component/PortfolioSection";
import Footer from "./Component/Footer";
import ContactPage from "./Component/ContactPage"; // new page

function App() {
  return (
    <Router>
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
        
        {/* New Contact Page */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
