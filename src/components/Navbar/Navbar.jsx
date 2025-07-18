import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import gbFlag from '../../assets/lang-flag/gb.png';
import esFlag from '../../assets/lang-flag/es.png';
import logoComplete from '../../assets/logos/complete.png';

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
      howItWorks: "How It Works",
      whyUs: "Why Us",
      regulations: "Regulations",
      contact: "Contact",
      whatsapp: "WhatsApp"
    },
    es: {
      products: "Productos",
      howItWorks: "Cómo Funciona",
      whyUs: "Por Qué Nosotros",
      regulations: "Regulaciones",
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
          <a href="#how-it-works" className={styles.navLink}>
            {t.howItWorks}
          </a>
          <a href="#why-us" className={styles.navLink}>
            {t.whyUs}
          </a>
          <a href="#regulations" className={styles.navLink}>
            {t.regulations}
          </a>
          <a href="#contact" className={styles.navLink}>
            {t.contact}
          </a>
        </div>
        
        <div className={styles.rightSection}>
          <a href="#whatsapp" className={styles.actionButton}>
            {t.whatsapp} <span>→</span>
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
            ☰
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#products" className={styles.navLink}>
            {t.products}
          </a>
          <a href="#how-it-works" className={styles.navLink}>
            {t.howItWorks}
          </a>
          <a href="#why-us" className={styles.navLink}>
            {t.whyUs}
          </a>
          <a href="#regulations" className={styles.navLink}>
            {t.regulations}
          </a>
          <a href="#contact" className={styles.navLink}>
            {t.contact}
          </a>
          <a href="#whatsapp" className={styles.actionButton}>
            {t.whatsapp} <span>→</span>
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
