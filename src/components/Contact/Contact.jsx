import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ language }) => {
  const translations = {
    en: {
      title: "Get In Touch",
      description:
        "Ready to enhance your marine safety with professional pipe identification? Contact our experts for a custom quote.",
      contactInfo: "Contact Information",
      phone: "Phone",
      email: "Email",
      address: "Address",
      whatsapp: "WhatsApp",
      callNow: "Call Now",
      sendEmail: "Send Email",
      getDirections: "Get Directions",
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
      address: "Dirección",
      whatsapp: "WhatsApp",
      callNow: "Llamar Ahora",
      sendEmail: "Enviar Correo",
      getDirections: "Obtener Direcciones",
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
                <div className={styles.contactIcon}>📞</div>
                <div className={styles.contactDetailContent}>
                  <div className={styles.contactDetailLabel}>{t.phone}</div>
                  <div className={styles.contactDetailValue}>+1 (234) 567-8901</div>
                  <a href="tel:+12345678901" className={styles.contactDetailAction}>
                    {t.callNow}
                  </a>
                </div>
              </div>
              
              <div className={styles.contactDetail}>
                <div className={styles.contactIcon}>✉️</div>
                <div className={styles.contactDetailContent}>
                  <div className={styles.contactDetailLabel}>{t.email}</div>
                  <div className={styles.contactDetailValue}>info@marinetapepro.com</div>
                  <a href="mailto:info@marinetapepro.com" className={styles.contactDetailAction}>
                    {t.sendEmail}
                  </a>
                </div>
              </div>
              
              <div className={styles.contactDetail}>
                <div className={styles.contactIcon}>📍</div>
                <div className={styles.contactDetailContent}>
                  <div className={styles.contactDetailLabel}>{t.address}</div>
                  <div className={styles.contactDetailValue}>123 Marina Way, Boston, MA 02110</div>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className={styles.contactDetailAction}>
                    {t.getDirections}
                  </a>
                </div>
              </div>
              
              <div className={styles.contactDetail} id="whatsapp">
                <div className={styles.contactIcon}>💬</div>
                <div className={styles.contactDetailContent}>
                  <div className={styles.contactDetailLabel}>{t.whatsapp}</div>
                  <div className={styles.contactDetailValue}>+1 (234) 567-8901</div>
                  <a href="https://wa.me/12345678901" target="_blank" rel="noopener noreferrer" className={styles.contactDetailAction}>
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
                {t.sendRequest}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
