import React from 'react';
import styles from './Regulations.module.css';

const Regulations = ({ language }) => {
  const translations = {
    en: {
      title: "Compliance & Standards",
      description: "Our products meet the highest international standards for marine safety and pipe identification.",
      downloadDocs: "Download Compliance Documentation"
    },
    es: {
      title: "Cumplimiento y Estándares",
      description: "Nuestros productos cumplen con los más altos estándares internacionales para seguridad marina e identificación de tuberías.",
      downloadDocs: "Descargar Documentación de Cumplimiento"
    }
  };

  const t = translations[language];

  return (
    <section id="regulations" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.description}>{t.description}</p>
          <a href="#" className={styles.downloadButton}>
            <span>📥</span> {t.downloadDocs}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Regulations;
