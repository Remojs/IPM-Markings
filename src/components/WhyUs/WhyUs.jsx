import React from 'react';
import styles from './WhyUs.module.css';

// Iconos SVG inline
const AnchorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="3"></circle>
    <line x1="12" y1="22" x2="12" y2="8"></line>
    <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const TeamIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const ShipIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 15l-6-6-6 6"></path>
    <path d="M12 9v14"></path>
    <path d="M21 12H3"></path>
  </svg>
);

const WhyUs = ({ language }) => {
const translations = {
  en: {
    title: "Why Choose IPM Markings?",
    experience: {
      title: "5 Years of Experience",
      description:
        "Delivering expert pipe identification solutions in marine environments since 2020 with a proven track record in safety.",
    },
    compliance: {
      title: "International Standards",
      description:
        "All our products fully adhere to global marine pipe identification standards for maximum reliability.",
    },
    support: {
      title: "24/7 Support",
      description:
        "Round‑the‑clock assistance to resolve your questions and technical needs at any time.",
    },
    delivery: {
      title: "Optimized Delivery Times",
      description:
        "Delivery schedules fine‑tuned for reliable planning, ensuring your operations stay on track.",
    },
    shipsEquipped: "Ships Equipped",
  },
  es: {
    title: "¿Por Qué Elegir IPM Markings?",
    experience: {
      title: "5 Años de Experiencia",
      description:
        "Ofreciendo soluciones de identificación de tuberías en entornos marinos desde 2020, con trayectoria comprobada en seguridad.",
    },
    compliance: {
      title: "Estándares Internacionales",
      description:
        "Nuestros productos cumplen al 100 % con los estándares globales de identificación de tuberías en ambientes marinos.",
    },
    support: {
      title: "Soporte 24/7",
      description:
        "Asistencia continua para resolver dudas y consultas técnicas en cualquier momento.",
    },
    delivery: {
      title: "Tiempos de Entrega",
      description:
        "Cronogramas de entrega ajustados para una planificación confiable y sin sorpresas.",
    },
    shipsEquipped: "Barcos Equipados",
  }
};

  const t = translations[language];

  const features = [
    {
      id: 1,
      title: t.experience.title,
      description: t.experience.description,
      icon: <AnchorIcon />
    },
    {
      id: 2,
      title: t.compliance.title,
      description: t.compliance.description,
      icon: <ShieldIcon />
    },
    {
      id: 3,
      title: t.support.title,
      description: t.support.description,
      icon: <TeamIcon />
    },
    {
      id: 4,
      title: t.delivery.title,
      description: t.delivery.description,
      icon: <ShipIcon />
    }
  ];

  return (
    <section id="why-us" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.title}</h2>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.featureCard}>
              <div className={styles.iconContainer}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
