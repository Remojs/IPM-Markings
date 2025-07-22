import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';
import logoComplete from '../../assets/logos/complete-logo.png';

// Social media icons
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const Footer = ({ language }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const translations = {
    en: {
      description: "Professional pipe identification solutions for marine environments.",
      contactUs: "Contact Us",
      requestQuote: "Request a Quote",
      copyright: "© 2025 IPM Markings. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      backToTop: "Back to Top"
    },
    es: {
      description: "Soluciones profesionales de identificación de tuberías para entornos marinos.",
      contactUs: "Contáctenos",
      requestQuote: "Solicitar Presupuesto",
      copyright: "© 2025 IPM Markings. Todos los derechos reservados.",
      privacyPolicy: "Política de Privacidad",
      termsOfService: "Términos de Servicio",
      backToTop: "Volver Arriba"
    }
  };

  const t = translations[language];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <div className={styles.footerLogo}>
              <img src={logoComplete} alt="IPM Markings" className={styles.logoImage} />
            </div>
            <p className={styles.footerDescription}>{t.description}</p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <TwitterIcon />
              </a>
            </div>
          </div>
          
          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>IPM Markings</h3>
            <div className={styles.footerLinks}>
              <a href="#contact" className={styles.footerLink}>{t.contactUs}</a>
              <a href="#contact" className={styles.footerLink}>{t.requestQuote}</a>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>{t.copyright}</div>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>{t.privacyPolicy}</a>
            <a href="#" className={styles.bottomLink}>{t.termsOfService}</a>
          </div>
        </div>
      </div>
      
      <div 
        className={`${styles.backToTop} ${!showBackToTop ? styles.hidden : ''}`}
        onClick={scrollToTop}
      >
        <span>↑</span>
      </div>
    </footer>
  );
};

export default Footer;
