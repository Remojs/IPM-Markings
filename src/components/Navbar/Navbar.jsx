import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

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

  return (
    <nav className={`${styles.navbarContainer} ${scrollY > 50 ? styles.scrolled : ''}`}>
      <div className={styles.navbarContent}>
        <Link to="/" className={styles.logo}>
          MarineTape Pro
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
          <a href="#whatsapp" className={styles.actionButton}>
            {t.whatsapp} <span>→</span>
          </a>
          <button onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}>
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </div>

        <button 
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          Menu
        </button>
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
          <button onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}>
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
