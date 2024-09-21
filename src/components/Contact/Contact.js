import React, { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [selectedPackage, setSelectedPackage] = useState("Basic Paket");

  const handlePackageChange = (e) => {
    setSelectedPackage(e.target.value);
  };

  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Kontakt</h2>
      <p className={styles.description}>
        Füllen Sie das folgende Formular aus, um mit uns in Kontakt zu treten
        oder ein Paket zu buchen.
      </p>

      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">E-Mail:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="package">Paket auswählen:</label>
          <select
            id="package"
            name="package"
            value={selectedPackage}
            onChange={handlePackageChange}
            required
          >
            <option value="Economy Paket">Economy Paket</option>
            <option value="Basic Paket">Basic Paket</option>
            <option value="Premium Paket">Premium Paket</option>
            <option value="Luxus Paket">Luxus Paket</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Nachricht:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>
          Absenden
        </button>
      </form>
    </section>
  );
}

export default Contact;
