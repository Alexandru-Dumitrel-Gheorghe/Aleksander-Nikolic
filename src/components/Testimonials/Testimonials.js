import React from "react";
import Slider from "react-slick";
import styles from "./Testimonials.module.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Importă stilurile pentru slider
import "aos/dist/aos.css"; // Importă fișierul CSS pentru AOS
import AOS from "aos";
import { useEffect } from "react";

function Testimonials() {
  // Inițializează AOS
  useEffect(() => {
    AOS.refresh(); // Reîmprospătează AOS pentru a recunoaște noile elemente
  }, []);

  // Setările pentru slider
  const settings = {
    dots: true, // Afișează puncte de navigare
    infinite: true, // Slider-ul se repetă la infinit
    speed: 500, // Viteza tranziției
    slidesToShow: 1, // Afișează un testimonial pe rând
    slidesToScroll: 1, // Derulează câte un slide odată
    autoplay: true, // Slide-urile se derulează automat
    autoplaySpeed: 4000, // Intervalul de timp pentru derulare automată
    arrows: false, // Ascunde săgețile pentru a folosi doar punctele
  };

  return (
    <section className={styles.testimonials} data-aos="fade-up">
      <h2 className={styles.title} data-aos="fade-down">
        Was unsere Kunden sagen
      </h2>

      <Slider {...settings} className={styles.slider}>
        <div className={styles.testimonialCard} data-aos="zoom-in">
          <FaQuoteLeft className={styles.quoteIcon} />
          <p className={styles.text}>
            "Die Zusammenarbeit mit Aleksandar war einfach großartig! Er hat es
            geschafft, die Emotionen unseres besonderen Tages perfekt
            einzufangen. Die Bilder sind atemberaubend und werden uns für immer
            in Erinnerung bleiben. Sehr professionell und kreativ. Absolut
            empfehlenswert!"
          </p>
          <div className={styles.clientInfo}>
            <h4 className={styles.clientName}>Alexandru Gheorghe</h4>
            <div className={styles.stars}>
              <FaStar className={styles.starIcon} />
              <FaStar className={styles.starIcon} />
              <FaStar className={styles.starIcon} />
              <FaStar className={styles.starIcon} />
              <FaStar className={styles.starIcon} />
            </div>
          </div>
        </div>

        {/* Al doilea testimonial */}
        <div className={styles.testimonialCard} data-aos="zoom-in">
          <FaQuoteLeft className={styles.quoteIcon} />
          <p className={styles.text}>
            "Aleksandar hat unseren Hochzeitstag zu etwas Besonderem gemacht. Er
            war super freundlich und hat wunderschöne Erinnerungen eingefangen.
            Ich würde ihn jedem empfehlen!"
          </p>
          <div className={styles.clientInfo}>
            <h4 className={styles.clientName}>Maria Popescu</h4>
            <div className={styles.stars}>
              <FaStar className={styles.starIcon} />
              <FaStar className={styles.starIcon} />
              <FaStar className={styles.starIcon} />
              <FaStar className={styles.starIcon} />
              <FaStar className={styles.starIcon} />
            </div>
          </div>
        </div>

        {/* Poți adăuga mai multe testimoniale */}
      </Slider>
    </section>
  );
}

export default Testimonials;
