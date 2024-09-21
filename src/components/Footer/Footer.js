import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        {/* Logo deasupra tuturor secțiunilor */}
        <img
          src={`${process.env.PUBLIC_URL}/img/Aleks.png`}
          alt="Logo Aleksandar Nikolic"
          className={styles.logo}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h4>Kontakt</h4>
          <p>Telefon: +49 123 456 789</p>
          <p>Email: aleksandar@example.com</p>
        </div>

        <div className={styles.quickLinks}>
          <h4>Schnellzugriff</h4>
          <ul>
            <li>
              <a href="#startseite">Startseite</a>
            </li>
            <li>
              <a href="#galerie">Galerie</a>
            </li>
            <li>
              <a href="#dienstleistungen">Dienstleistungen</a>
            </li>
            <li>
              <a href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </div>

        <div className={styles.socialMedia}>
          <h4>Folgen Sie mir</h4>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.copyright}>
        <p>Alle Rechte vorbehalten &copy; 2024</p>
        <p>Developed by Alexandru Gheorghe</p>
      </div>
    </footer>
  );
}

export default Footer;
