import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Închide meniul când se face clic pe un link
  const handleLinkClick = () => {
    setMenuOpen(false);
    document.body.style.overflow = ""; // Resetăm overflow imediat după ce se face clic pe un link
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        isScrolled || menuOpen ? styles.scrolled : ""
      }`}
    >
      <div className={styles.headerContainer}>
        {/* Logo */}
        <a href="#startseite" className={styles.logo} onClick={handleLinkClick}>
          <img
            src={`${process.env.PUBLIC_URL}/img/Aleks.png`}
            alt="Logo Aleksandar Nikolic"
            className={styles.logoImage}
          />
        </a>

        {/* Meniul principal */}
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navLinks}>
            <li>
              <a href="#startseite" onClick={handleLinkClick}>
                Startseite
              </a>
            </li>
            <li>
              <a href="#galerie" onClick={handleLinkClick}>
                Galerie
              </a>
            </li>
            <li>
              <a href="#uber" onClick={handleLinkClick}>
                Über mich
              </a>
            </li>
            <li>
              <a href="#dienstleistungen" onClick={handleLinkClick}>
                Dienstleistungen
              </a>
            </li>
            <li>
              <a href="#kontakt" onClick={handleLinkClick}>
                Kontakt
              </a>
            </li>
          </ul>
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
        </nav>

        {/* Butonul Hamburger */}
        <div
          className={`${styles.hamburger} ${
            menuOpen ? styles.hamburgerOpen : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          aria-expanded={menuOpen}
          onKeyPress={(e) => {
            if (e.key === "Enter") toggleMenu();
          }}
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
