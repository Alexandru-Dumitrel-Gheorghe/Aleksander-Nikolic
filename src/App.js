import React, { useEffect } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Importă fișierul CSS pentru AOS
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import VideoGallery from "./components/VideoGallery/VideoGallery";
import Collaborators from "./components/Collaborators/Collaborators";
import FAQ from "./components/FAQ/FAQ";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inițializează AOS cu durata de 1000ms
  }, []);

  return (
    <div className="App">
      <Header />
      <section id="startseite">
        <Hero />
      </section>
      <section id="uber">
        <About />
      </section>
      <section id="dienstleistungen">
        <Services />
      </section>
      <section id="videogallery">
        <VideoGallery />
      </section>
      <section id="galerie">
        <Gallery />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="kontakt">
        <Contact />
      </section>
      <Collaborators />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
