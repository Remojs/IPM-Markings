import React from 'react';
import styles from './Contact.module.css';

// Iconos SVG inline
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const WhatsappIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const Contact = ({ language }) => {
  const translations = {
    en: {
      title: "Get In Touch",
      description:
        "Ready to enhance your marine safety with professional pipe identification? Contact our experts for a custom quote.",
      contactInfo: "Contact Information",
      phone: "Phone",
      email: "Email",
      whatsapp: "WhatsApp",
      callNow: "Call Now",
      sendEmail: "Send Email",
      chatNow: "Chat Now",
      requestQuote: "Request a Quote",
      formDescription: "Fill out the form below and we'll get back to you within 24 hours.",
      firstName: "First Name",
      lastName: "Last Name",
      company: "Company",
      projectDetails: "Project Details",
      projectPlaceholder: "Tell us about your pipe identification requirements...",
      sendRequest: "Send Quote Request"
    },
    es: {
      title: "Contáctenos",
      description:
        "¿Listo para mejorar su seguridad marina con identificación profesional de tuberías? Contacte a nuestros expertos para un presupuesto personalizado.",
      contactInfo: "Información de Contacto",
      phone: "Teléfono",
      email: "Correo Electrónico",
      whatsapp: "WhatsApp",
      callNow: "Llamar Ahora",
      sendEmail: "Enviar Correo",
      chatNow: "Chatear Ahora",
      requestQuote: "Solicitar un Presupuesto",
      formDescription: "Complete el formulario a continuación y nos pondremos en contacto con usted dentro de las 24 horas.",
      firstName: "Nombre",
      lastName: "Apellido",
      company: "Empresa",
      projectDetails: "Detalles del Proyecto",
      projectPlaceholder: "Cuéntenos sobre sus requisitos de identificación de tuberías...",
      sendRequest: "Enviar Solicitud de Presupuesto"
    }
  };

  const t = translations[language];

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.description}>{t.description}</p>
        </div>

        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <h3 className={styles.contactInfoTitle}>{t.contactInfo}</h3>
            <div className={styles.contactDetailsList}>
              <div className={styles.contactDetail}>
                <div className={styles.contactIcon}>
                  <PhoneIcon />
                </div>
                <div className={styles.contactDetailContent}>
                  <div className={styles.contactDetailLabel}>{t.phone}</div>
                  <div className={styles.contactDetailValue}>+54 (223) 569-7731</div>
                  <a href="tel:+542235697731" className={styles.contactDetailAction}>
                    {t.callNow}
                  </a>
                </div>
              </div>
              
              <div className={styles.contactDetail}>
                <div className={styles.contactIcon}>
                  <EmailIcon />
                </div>
                <div className={styles.contactDetailContent}>
                  <div className={styles.contactDetailLabel}>{t.email}</div>
                  <div className={styles.contactDetailValue}>ipmmarkings@gmail.com</div>
                  <a href="mailto:ipmmarkings@gmail.com" className={styles.contactDetailAction}>
                    {t.sendEmail}
                  </a>
                </div>
              </div>
              
              <div className={styles.contactDetail} id="whatsapp">
                <div className={styles.contactIcon}>
                  <WhatsappIcon />
                </div>
                <div className={styles.contactDetailContent}>
                  <div className={styles.contactDetailLabel}>{t.whatsapp}</div>
                  <div className={styles.contactDetailValue}>+54 9 (223) 569-7731</div>
                  <a href="https://wa.me/5492235697731" target="_blank" rel="noopener noreferrer" className={styles.contactDetailAction}>
                    {t.chatNow}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <h3 className={styles.formTitle}>{t.requestQuote}</h3>
            <p className={styles.formDescription}>{t.formDescription}</p>
            
            <form>
              <div className={styles.formGrid}>
                <input 
                  type="text" 
                  placeholder={t.firstName} 
                  className={styles.formInput} 
                  required 
                />
                <input 
                  type="text" 
                  placeholder={t.lastName} 
                  className={styles.formInput} 
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className={styles.formInput} 
                  required 
                />
                <input 
                  type="text" 
                  placeholder={t.company} 
                  className={styles.formInput} 
                />
              </div>
              
              <textarea 
                placeholder={t.projectPlaceholder} 
                className={styles.formTextarea} 
                required
              ></textarea>
              
              <button type="submit" className={styles.submitButton}>
                {t.sendRequest} <SendIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
