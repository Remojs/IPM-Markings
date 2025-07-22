import React from 'react';
import styles from './Hero.module.css';
import scrollAnimation from '../../assets/animation/scroll.webm';

// Icono SVG inline para el teléfono
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

// Icono SVG inline para la flecha hacia abajo
const ArrowDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M19 12l-7 7-7-7"/>
  </svg>
);

const Hero = ({ language }) => {
  const translations = {
    en: {
      badge: "Marine Safety Specialists Since 2020",
      title: "Professional",
      titleSpan: "Pipe Identification",
      subtitle: "for Marine Environments",
      description:
        "Industry-leading pipe marking tapes designed for ships, offshore platforms, and marine facilities. ISO-14726 compliant solutions trusted by naval professionals worldwide.",
      viewProducts: "View Products",
      requestQuote: "Request Quote"
    },
    es: {
      badge: "Especialistas en Seguridad Marina Desde 2020",
      title: "Identificación",
      titleSpan: "Profesional de Tuberías",
      subtitle: "para Entornos Marinos",
      description:
        "Cintas de marcado de tuberías líderes en la industria diseñadas para barcos, plataformas offshore e instalaciones marinas. Soluciones conformes con ISO-14726 confiadas por profesionales navales en todo el mundo.",
      viewProducts: "Ver Productos",
      requestQuote: "Solicitar Presupuesto"
    }
  };

  const t = translations[language];

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.badge}>
          {t.badge}
        </div>
        <h1 className={styles.title}>
          <div className={styles.titleLine}>{t.title}</div>
          <div className={styles.titleSpan}>{t.titleSpan}</div>
          <div className={styles.titleLine}>{t.subtitle}</div>
        </h1>
        <p className={styles.description}>{t.description}</p>
        <div className={styles.buttonGroup}>
          <a href="#products" className={styles.primaryButton}>
            {t.viewProducts} <ArrowDownIcon />
          </a>
          <a href="#contact" className={styles.secondaryButton}>
            {t.requestQuote} <PhoneIcon />
          </a>
        </div>
      </div>
      <video src={scrollAnimation} autoPlay loop muted className={styles.scrollIndicator} />
    </section>
  );
};

export default Hero;
