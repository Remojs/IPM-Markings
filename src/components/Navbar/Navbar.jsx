import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import gbFlag from '../../assets/lang-flag/gb.png';
import esFlag from '../../assets/lang-flag/es.png';
import logoComplete from '../../assets/logos/complete.png';

// Icono SVG inline de WhatsApp
const WhatsappIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

// Icono SVG inline de menú hamburguesa
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const Navbar = ({ language, setLanguage }) => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const translations = {
    en: {
      products: "Products",
      whyUs: "Why Us",
      contact: "Contact",
      whatsapp: "WhatsApp"
    },
    es: {
      products: "Productos",
      whyUs: "Por Qué Nosotros",
      contact: "Contacto",
      whatsapp: "WhatsApp"
    }
  };

  const t = translations[language];

  // Función para renderizar la bandera según el idioma actual
  const renderFlag = () => {
    if (language === 'en') {
      return (
        <div className={styles.flagIcon}>
          <img src={gbFlag} alt="English" />
        </div>
      );
    } else {
      return (
        <div className={styles.flagIcon}>
          <img src={esFlag} alt="Español" />
        </div>
      );
    }
  };

  return (
    <nav className={`${styles.navbarContainer} ${scrollY > 50 ? styles.scrolled : ''}`}>
      <div className={styles.navbarContent}>
        <Link to="/" className={styles.logo}>
          <img src={logoComplete} alt="IPM Markings" className={styles.logoImage} />
          <span className={styles.brandText}>IPM Markings</span>
        </Link>

        <div className={styles.navLinks}>
          <a href="#products" className={styles.navLink}>
            {t.products}
          </a>
          <a href="#why-us" className={styles.navLink}>
            {t.whyUs}
          </a>
          <a href="#contact" className={styles.navLink}>
            {t.contact}
          </a>
        </div>
        
        <div className={styles.rightSection}>
          <a href="https://wa.me/5491159259662?text=Hello%20IPM%20Markings,%20I%27m%20interested%20in%20your%20products" className={styles.actionButton}>
            <WhatsappIcon /> {t.whatsapp}
          </a>
          <button 
            className={styles.languageSwitch}
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            aria-label={`Change language to ${language === 'en' ? 'Spanish' : 'English'}`}
          >
            {renderFlag()}
          </button>
          <button 
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#products" className={styles.navLink}>
            {t.products}
          </a>
          <a href="#why-us" className={styles.navLink}>
            {t.whyUs}
          </a>
          <a href="#contact" className={styles.navLink}>
            {t.contact}
          </a>
          <a href="https://wa.me/5491159259662?text=Hello%20IPM%20Markings,%20I%27m%20interested%20in%20your%20products" className={styles.actionButton}>
            <WhatsappIcon /> {t.whatsapp}
          </a>
          <button 
            className={styles.languageSwitch}
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
          >
            <div className={styles.flagIcon}>
              {language === 'en' ? <img src={esFlag} alt="Español" /> : <img src={gbFlag} alt="English" />}
            </div>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
