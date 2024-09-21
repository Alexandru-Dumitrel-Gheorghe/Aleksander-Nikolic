// FAQ.jsx
import React, { useState, useEffect } from "react";
import styles from "./FAQ.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Activează sau dezactivează întrebarea
  };

  const faqs = [
    {
      question: "Wie lange dauert ein Hochzeitsfotoshooting?",
      answer:
        "Ein typisches Hochzeitsfotoshooting dauert zwischen 6 und 10 Stunden, je nach dem Zeitplan und den Wünschen des Brautpaars. Wir passen uns an, um alle wichtigen Momente des Tages festzuhalten.",
    },
    {
      question: "Welche Ausrüstung verwendest du für Hochzeitsfotos?",
      answer:
        "Wir verwenden moderne Vollformatkameras und eine Vielzahl von professionellen Objektiven, um sicherzustellen, dass jeder Moment in höchster Qualität eingefangen wird.",
    },
    {
      question: "Wann erhalten wir unsere Fotos?",
      answer:
        "Die Bearbeitung der Fotos dauert in der Regel 4 bis 6 Wochen, abhängig von der gewählten Paketoption und dem aktuellen Arbeitsaufkommen. Die fertigen Fotos werden digital über eine Online-Galerie bereitgestellt.",
    },
    {
      question: "Bietest du auch Videoaufnahmen an?",
      answer:
        "Ja, wir arbeiten mit professionellen Videografen zusammen, um Hochzeiten sowohl fotografisch als auch videografisch abzudecken.",
    },
  ];

  useEffect(() => {
    AOS.refresh(); // Reîmprospătează AOS pentru a recunoaște noile elemente
  }, [activeIndex]);

  return (
    <section className={styles.faqSection} data-aos="fade-up">
      <h2 className={styles.faqTitle} data-aos="fade-down">
        Häufig gestellte Fragen
      </h2>
      <div
        className={styles.titleUnderline}
        data-aos="fade-up"
        data-aos-delay="200"
      ></div>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={() => toggleFAQ(index)}
            data-aos="fade-up"
            data-aos-delay={index * 100 + 300} // Întârziere diferită pentru fiecare item
          >
            <div className={styles.question}>
              <h3>{faq.question}</h3>
              <span className={styles.toggleIcon}>
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            <div
              className={`${styles.answer} ${
                activeIndex === index ? styles.show : styles.hide
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
