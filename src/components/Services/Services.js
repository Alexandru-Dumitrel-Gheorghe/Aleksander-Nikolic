import React from "react";
import styles from "./Services.module.css";

function Services() {
  return (
    <section className={styles.services}>
      <h2 className={styles.servicesTitle} data-aos="fade-down">
        Meine Dienstleistungen
      </h2>
      <div className={styles.servicesList}>
        <div
          className={styles.serviceItem}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <i className={`fas fa-camera-retro ${styles.icon}`}></i>
          <h3 className={styles.serviceItemTitle}>Hochzeitsfotografie</h3>
          <p className={styles.serviceItemText}>
            Professionelle Fotografie für Ihren besonderen Tag, mit
            atemberaubenden Bildern, die die Magie Ihres Hochzeitstags für immer
            festhalten.
          </p>
        </div>
        <div
          className={styles.serviceItem}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <i className={`fas fa-heart ${styles.icon}`}></i>
          <h3 className={styles.serviceItemTitle}>Pre-Wedding Shootings</h3>
          <p className={styles.serviceItemText}>
            Eine entspannte und lustige Fotosession vor der Hochzeit, die es uns
            ermöglicht, einzigartige Momente festzuhalten und Ihre Geschichte zu
            erzählen.
          </p>
        </div>
        <div
          className={styles.serviceItem}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <i className={`fas fa-film ${styles.icon}`}></i>
          <h3 className={styles.serviceItemTitle}>After-Wedding Shootings</h3>
          <p className={styles.serviceItemText}>
            After-Wedding-Shootings bieten die perfekte Gelegenheit,
            wunderschöne, entspannte Bilder ohne den Stress des Hochzeitstags
            aufzunehmen.
          </p>
        </div>
        <div
          className={styles.serviceItem}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <i className={`fas fa-video ${styles.icon}`}></i>{" "}
          {/* Adăugăm iconița pentru video */}
          <h3 className={styles.serviceItemTitle}>Videografie</h3>
          <p className={styles.serviceItemText}>
            Professionelle Hochzeitsvideos, die die Emotionen und Highlights
            Ihres besonderen Tages auf beeindruckende Weise festhalten.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
