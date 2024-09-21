import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about}>
      <img
        src="https://plus.unsplash.com/premium_photo-1674389991679-e1a7a0b3e0a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Photographer"
        className={styles.aboutImage}
        data-aos="fade-right"
      />
      <div
        className={styles.aboutContent}
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <h2
          className={styles.aboutTitle}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Über mich
        </h2>
        <p className={styles.aboutText} data-aos="fade-up" data-aos-delay="200">
          Hallo, ich bin Aleksandar Nikolic, und ich liebe es, die schönsten
          Momente eures Lebens festzuhalten. Mit jahrelanger Erfahrung in der
          Hochzeitsfotografie sorge ich dafür, dass jede Emotion und jeder
          Augenblick für immer bewahrt wird.
        </p>
        <button
          className={styles.ctaButton}
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Kontakt aufnehmen
        </button>
      </div>
    </section>
  );
}

export default About;
