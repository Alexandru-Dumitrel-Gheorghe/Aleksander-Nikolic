import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title} data-aos="fade-down">
        Unvergessliche Momente, für immer festgehalten
      </h1>
      <button
        className={styles.ctaButton}
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        Jetzt buchen
      </button>{" "}
      {/* Butonul pentru rezervare */}
    </section>
  );
}

export default Hero;
