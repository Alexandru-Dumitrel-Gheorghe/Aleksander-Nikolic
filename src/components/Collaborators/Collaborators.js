// Collaborators.jsx
import React, { useEffect } from "react";
import styles from "./Collaborators.module.css";
import { FaGlobe, FaInstagram, FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Collaborators() {
  useEffect(() => {
    AOS.refresh(); // Reîmprospătează AOS pentru a recunoaște noile elemente
  }, []);

  return (
    <section className={styles.collaborators} data-aos="fade-up">
      <h2 className={styles.title} data-aos="fade-down">
        Unsere Partner
      </h2>
      <div className={styles.partner} data-aos="fade-up" data-aos-delay="200">
        <img
          src={`${process.env.PUBLIC_URL}/img/Alexandru.png`} // Calea către logo din folderul public
          alt="Alexandru Gheorghe Logo"
          className={styles.logo}
          data-aos="zoom-in"
          data-aos-delay="300"
        />
        <div className={styles.info} data-aos="fade-left" data-aos-delay="400">
          <h3>Web Developer Alexandru Gheorghe</h3>
          <div className={styles.socialIcons}>
            <a
              href="https://alexandru-portofolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <FaGlobe />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/Alexandru-Dumitrel-Gheorghe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              data-aos="fade-right"
              data-aos-delay="700"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collaborators;
