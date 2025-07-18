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
      title: "¿Por Qué Elegir IPM Markings?",
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
