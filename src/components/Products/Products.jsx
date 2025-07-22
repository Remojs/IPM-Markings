import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../../data/products.json';
import styles from './Products.module.css';
import isoTable from '../../assets/ISO-Table.png';
// Import a sample PDF file path (you need to add this file to your assets)
import assetsPdf from '../../assets/IPM-Assets.pdf'; // Make sure to add this PDF file to your project

// Import all ISO images using Vite's dynamic import
const isoImages = import.meta.glob('../../assets/ISO/*.png');

// Icono SVG inline para la flecha hacia la derecha
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

// Icono SVG inline para la descarga
const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const Products = ({ language }) => {
  const translations = {
    en: {
      // Section titles and general descriptions
      title: "Our Product Range",
      description:
        "Comprehensive selection of pipe identification tapes engineered for marine environments, meeting international safety standards.",
      
      // Button labels and product details
      getQuote: "Get Quote",
      
      // ISO Standards section
      isoStandardsTitle: "ISO Color Standards",
      isoStandardsDescription: "Our pipe marking tapes follow international ISO standards for color coding, ensuring consistency and safety across all marine applications.",
      downloadIsoTable: "Download ISO Color Chart",
      downloadAssets: "Download Assets PDF",
      
      // Product features
      features: {
        saltwaterResistant: "Saltwater Resistant",
        uvStable: "UV Stable",
        bs1710Compliant: "BS1710 Compliant",
        extremeDurability: "Extreme Durability",
        chemicalResistant: "Chemical Resistant",
        imoApproved: "IMO Approved",
        highVisibility: "High Visibility",
        nightSafety: "Night Safety",
        weatherProof: "Weather Proof",
        customText: "Custom Text",
        symbolOptions: "Symbol Options",
        permanentAdhesive: "Permanent Adhesive",
        emergencySystems: "Emergency Systems",
        quickRecognition: "Quick Recognition",
        fireResistant: "Fire Resistant",
        flowDirection: "Flow Direction",
        clearArrows: "Clear Arrows",
        fadeResistant: "Fade Resistant",
      }
    },
    es: {
      // Section titles and general descriptions
      title: "Nuestra Gama de Productos",
      description:
        "Selección completa de cintas de identificación de tuberías diseñadas para entornos marinos, cumpliendo con estándares internacionales de seguridad.",
      
      // Button labels and product details
      getQuote: "Solicitar Presupuesto",
      
      // ISO Standards section
      isoStandardsTitle: "Estándares de Color ISO",
      isoStandardsDescription: "Nuestras cintas de marcado de tuberías siguen los estándares internacionales ISO para codificación de colores, garantizando consistencia y seguridad en todas las aplicaciones marinas.",
      downloadIsoTable: "Descargar Tabla de Colores ISO",
      downloadAssets: "Descargar PDF de Activos",
      
      // Product features
      features: {
        saltwaterResistant: "Resistente al Agua Salada",
        uvStable: "Estable a los Rayos UV",
        bs1710Compliant: "Cumple con BS1710",
        extremeDurability: "Durabilidad Extrema",
        chemicalResistant: "Resistente a Productos Químicos",
        imoApproved: "Aprobado por IMO",
        highVisibility: "Alta Visibilidad",
        nightSafety: "Seguridad Nocturna",
        weatherProof: "Resistente a la Intemperie",
        customText: "Texto Personalizado",
        symbolOptions: "Opciones de Símbolos",
        permanentAdhesive: "Adhesivo Permanente",
        emergencySystems: "Sistemas de Emergencia",
        quickRecognition: "Reconocimiento Rápido",
        fireResistant: "Resistente al Fuego",
        flowDirection: "Dirección del Flujo",
        clearArrows: "Flechas Claras",
        fadeResistant: "Resistente a la Decoloración",
      }
    }
  };

  const t = translations[language];

  // Use a placeholder image if product image is not available
  const getProductImage = (product) => {
    if (!product.image) return 'https://via.placeholder.com/300x200?text=Product+Image';
    
    // If the product has an ISO number, use it to get the image
    if (product.isoNumber) {
      // Use dynamic import to ensure proper bundling in production
      const imagePath = `../../assets/ISO/${product.isoNumber}.png`;
      return new URL(imagePath, import.meta.url).href;
    }
    
    return product.image;
  };

  return (
    <section id="products" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.description}>{t.description}</p>
        </div>

        <div className={styles.productsGrid}>
          {productsData.map((product) => (
            <div key={product.id} className={styles.productCard}>
              {product.isoNumber && (
                <div className={styles.isoTag}>ISO {product.isoNumber}</div>
              )}
              <img 
                src={getProductImage(product)} 
                alt={product.name} 
                className={styles.productImage} 
              />
              <div className={styles.productContent}>
                <h3 className={styles.productTitle}>
                  {language === 'en' 
                    ? (product.name_en || `${product.name} Pipe`)
                    : (product.name_es || `Cinta ${product.name}`)
                  }
                </h3>
                <p className={styles.productDescription}>
                  {language === 'en'
                    ? (product.description_en || product.description || 'High-quality pipe marking tape for marine environments.')
                    : (product.description_es || product.description || 'Cinta de marcado de tuberías de alta calidad para entornos marinos.')
                  }
                </p>
                <a href="#contact" className={styles.productButton}>
                  {t.getQuote} <ArrowRightIcon />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.isoStandardsSection}>
          <h2 className={styles.isoTitle}>{t.isoStandardsTitle}</h2>
          <p className={styles.isoDescription}>{t.isoStandardsDescription}</p>
          <div className={styles.isoTableContainer}>
            <img src={isoTable} alt="ISO Standards Table" className={styles.isoTableImage} />
            <div className={styles.downloadButtonsContainer}>
              <a 
                href={isoTable} 
                download="ISO-TapesTable_2024.png" 
                className={styles.downloadButton}
              >
                {t.downloadIsoTable} <DownloadIcon />
              </a>
              <a 
                href={assetsPdf} 
                download="IPM-Assets.pdf" 
                className={styles.downloadButton}
              >
                {t.downloadAssets} <DownloadIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
