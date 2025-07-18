import React from 'react';
import styles from './Hero.module.css';
import scrollAnimation from '../../assets/animation/scroll.webm';

const Hero = ({ language }) => {
  const translations = {
    en: {
      badge: "Marine Safety Specialists Since 1985",
      title: "Professional",
      titleSpan: "Pipe Identification",
      subtitle: "for Marine Environments",
      description:
        "Industry-leading pipe marking tapes designed for ships, offshore platforms, and marine facilities. BS1710 compliant solutions trusted by naval professionals worldwide.",
      viewProducts: "View Products",
      requestQuote: "Request Quote"
    },
    es: {
      badge: "Especialistas en Seguridad Marina Desde 1985",
      title: "Identificación",
      titleSpan: "Profesional de Tuberías",
      subtitle: "para Entornos Marinos",
      description:
        "Cintas de marcado de tuberías líderes en la industria diseñadas para barcos, plataformas offshore e instalaciones marinas. Soluciones conformes con BS1710 confiadas por profesionales navales en todo el mundo.",
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
            {t.viewProducts} <span>↓</span>
          </a>
          <a href="#contact" className={styles.secondaryButton}>
            {t.requestQuote} <span>→</span>
          </a>
        </div>
      </div>
      <video src={scrollAnimation} autoPlay loop muted className={styles.scrollIndicator} />
    </section>
  );
};

export default Hero;
