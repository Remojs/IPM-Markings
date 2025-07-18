import React from 'react';
import styles from './HowItWorks.module.css';

const HowItWorks = ({ language }) => {
  const translations = {
    en: {
      title: "How It Works",
      description: "Simple installation process for professional pipe identification in marine environments.",
      step1: {
        title: "Surface Preparation",
        description:
          "Clean and dry the pipe surface. Remove any oil, dirt, or existing markings for optimal adhesion.",
      },
      step2: {
        title: "Apply Identification Tape",
        description: "Carefully apply the tape following BS1710 standards for proper positioning and visibility.",
      },
      step3: {
        title: "Quality Verification",
        description: "Inspect installation for proper adhesion, readability, and compliance with safety regulations.",
      },
    },
    es: {
      title: "Cómo Funciona",
      description: "Proceso de instalación simple para la identificación profesional de tuberías en entornos marinos.",
      step1: {
        title: "Preparación de la Superficie",
        description:
          "Limpie y seque la superficie de la tubería. Elimine cualquier aceite, suciedad o marcas existentes para una adhesión óptima.",
      },
      step2: {
        title: "Aplicar Cinta de Identificación",
        description: "Aplique cuidadosamente la cinta siguiendo los estándares BS1710 para un posicionamiento y visibilidad adecuados.",
      },
      step3: {
        title: "Verificación de Calidad",
        description: "Inspeccione la instalación para una adhesión adecuada, legibilidad y cumplimiento de las normas de seguridad.",
      },
    }
  };

  const t = translations[language];

  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.description}>{t.description}</p>
        </div>

        <div className={styles.stepsContainer}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>1</div>
            <h3 className={styles.stepTitle}>{t.step1.title}</h3>
            <p className={styles.stepDescription}>{t.step1.description}</p>
          </div>
          
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>{t.step2.title}</h3>
            <p className={styles.stepDescription}>{t.step2.description}</p>
          </div>
          
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>{t.step3.title}</h3>
            <p className={styles.stepDescription}>{t.step3.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
