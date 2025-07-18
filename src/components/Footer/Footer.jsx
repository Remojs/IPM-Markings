import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';

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
      description: "Professional pipe identification solutions for marine environments since 1985.",
      products: "Products",
      standardTape: "Standard Tape",
      highVisibilityTape: "High Visibility Tape",
      premiumSystems: "Premium Systems",
      customSolutions: "Custom Solutions",
      company: "Company",
      aboutUs: "About Us",
      team: "Our Team",
      careers: "Careers",
      news: "News",
      resources: "Resources",
      regulations: "Regulations",
      guides: "Installation Guides",
      blog: "Blog",
      faqs: "FAQs",
      support: "Support",
      contactUs: "Contact Us",
      requestQuote: "Request a Quote",
      technicalSupport: "Technical Support",
      shipping: "Shipping Information",
      copyright: "© 2023 MarineTape Pro. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      cookiePolicy: "Cookie Policy",
      backToTop: "Back to Top"
    },
    es: {
      description: "Soluciones profesionales de identificación de tuberías para entornos marinos desde 1985.",
      products: "Productos",
      standardTape: "Cinta Estándar",
      highVisibilityTape: "Cinta de Alta Visibilidad",
      premiumSystems: "Sistemas Premium",
      customSolutions: "Soluciones Personalizadas",
      company: "Empresa",
      aboutUs: "Sobre Nosotros",
      team: "Nuestro Equipo",
      careers: "Carreras",
      news: "Noticias",
      resources: "Recursos",
      regulations: "Regulaciones",
      guides: "Guías de Instalación",
      blog: "Blog",
      faqs: "Preguntas Frecuentes",
      support: "Soporte",
      contactUs: "Contáctenos",
      requestQuote: "Solicitar Presupuesto",
      technicalSupport: "Soporte Técnico",
      shipping: "Información de Envío",
      copyright: "© 2023 MarineTape Pro. Todos los derechos reservados.",
      privacyPolicy: "Política de Privacidad",
      termsOfService: "Términos de Servicio",
      cookiePolicy: "Política de Cookies",
      backToTop: "Volver Arriba"
    }
  };

  const t = translations[language];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <a href="#" className={styles.footerLogo}>MarineTape Pro</a>
            <p className={styles.footerDescription}>{t.description}</p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <span>📱</span>
              </a>
              <a href="#" className={styles.socialLink}>
                <span>📘</span>
              </a>
              <a href="#" className={styles.socialLink}>
                <span>📸</span>
              </a>
              <a href="#" className={styles.socialLink}>
                <span>📹</span>
              </a>
            </div>
          </div>
          
          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>{t.products}</h3>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>{t.standardTape}</a>
              <a href="#" className={styles.footerLink}>{t.highVisibilityTape}</a>
              <a href="#" className={styles.footerLink}>{t.premiumSystems}</a>
              <a href="#" className={styles.footerLink}>{t.customSolutions}</a>
            </div>
          </div>
          
          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>{t.resources}</h3>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>{t.regulations}</a>
              <a href="#" className={styles.footerLink}>{t.guides}</a>
              <a href="#" className={styles.footerLink}>{t.blog}</a>
              <a href="#" className={styles.footerLink}>{t.faqs}</a>
            </div>
          </div>
          
          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>{t.support}</h3>
            <div className={styles.footerLinks}>
              <a href="#contact" className={styles.footerLink}>{t.contactUs}</a>
              <a href="#contact" className={styles.footerLink}>{t.requestQuote}</a>
              <a href="#" className={styles.footerLink}>{t.technicalSupport}</a>
              <a href="#" className={styles.footerLink}>{t.shipping}</a>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>{t.copyright}</div>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>{t.privacyPolicy}</a>
            <a href="#" className={styles.bottomLink}>{t.termsOfService}</a>
            <a href="#" className={styles.bottomLink}>{t.cookiePolicy}</a>
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
