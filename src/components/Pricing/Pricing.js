// Pricing.jsx
import React from "react";
import styles from "./Pricing.module.css";

function Pricing() {
  const pricingPlans = [
    {
      name: "Economy Paket",
      price: "€300",
      features: [
        "Bis zu 2 Stunden Fotografie",
        "20 bearbeitete Fotos",
        "Online Galerie",
        "Beratung vor dem Event",
      ],
      type: "economy",
      delay: 100,
    },
    {
      name: "Basic Paket",
      price: "€500",
      features: [
        "Bis zu 5 Stunden Fotografie",
        "50 bearbeitete Fotos",
        "Online Galerie",
        "Beratung vor dem Event",
      ],
      type: "basic",
      delay: 200,
    },
    {
      name: "Premium Paket",
      price: "€1000",
      features: [
        "Bis zu 10 Stunden Fotografie",
        "100 bearbeitete Fotos",
        "Online Galerie",
        "Fotobuch inklusive",
      ],
      type: "popular",
      delay: 300,
    },
    {
      name: "Luxus Paket",
      price: "€1500",
      features: [
        "Ganztägige Fotografie",
        "150 bearbeitete Fotos",
        "Online Galerie",
        "Fotobuch und USB-Stick inklusive",
      ],
      type: "luxury",
      delay: 400,
    },
  ];

  return (
    <section className={styles.pricing}>
      <h2 className={styles.title} data-aos="fade-down">
        Unsere Preise
      </h2>

      <div className={styles.pricingGrid}>
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`${styles.pricingCard} ${styles[plan.type]}`}
            data-aos="fade-up"
            data-aos-delay={plan.delay}
          >
            <h3 className={styles.planTitle}>{plan.name}</h3>
            <p className={styles.price}>{plan.price}</p>
            <ul className={styles.features}>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className={styles.ctaButton}>Paket buchen</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
