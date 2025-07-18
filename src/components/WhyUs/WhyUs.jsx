import React from 'react';
import styles from './WhyUs.module.css';

const WhyUs = ({ language }) => {
  const translations = {
    en: {
      title: "Why Choose MarineTape Pro?",
      experience: {
        title: "38+ Years Experience",
        description:
          "Trusted by naval professionals worldwide since 1985, with proven expertise in marine safety solutions.",
      },
      compliance: {
        title: "BS1710 Compliance",
        description:
          "All products meet or exceed international standards for pipe identification in marine environments.",
      },
      support: {
        title: "Expert Support",
        description:
          "Dedicated technical team providing consultation and support for your specific marine applications.",
      },
      delivery: {
        title: "Fast Delivery",
        description: "Quick turnaround times with global shipping to keep your operations running smoothly.",
      },
      shipsEquipped: "Ships Equipped",
    },
    es: {
      title: "¿Por Qué Elegir MarineTape Pro?",
      experience: {
        title: "38+ Años de Experiencia",
        description:
          "Confiado por profesionales navales en todo el mundo desde 1985, con experiencia probada en soluciones de seguridad marina.",
      },
      compliance: {
        title: "Cumplimiento BS1710",
        description:
          "Todos los productos cumplen o superan los estándares internacionales para la identificación de tuberías en entornos marinos.",
      },
      support: {
        title: "Soporte Experto",
        description:
          "Equipo técnico dedicado que proporciona consulta y apoyo para sus aplicaciones marinas específicas.",
      },
      delivery: {
        title: "Entrega Rápida",
        description: "Tiempos de entrega rápidos con envío global para mantener sus operaciones funcionando sin problemas.",
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
      icon: "⚓"
    },
    {
      id: 2,
      title: t.compliance.title,
      description: t.compliance.description,
      icon: "🛡️"
    },
    {
      id: 3,
      title: t.support.title,
      description: t.support.description,
      icon: "👥"
    },
    {
      id: 4,
      title: t.delivery.title,
      description: t.delivery.description,
      icon: "🚢"
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
                <span className={styles.icon}>{feature.icon}</span>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.statsContainer}>
          <div className={styles.stat}>
            <div className={styles.statValue}>5,000+</div>
            <div className={styles.statLabel}>{t.shipsEquipped}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
