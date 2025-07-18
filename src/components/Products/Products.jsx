import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../../data/products.json';
import styles from './Products.module.css';

const Products = ({ language }) => {
  const translations = {
    en: {
      title: "Our Product Range",
      description:
        "Comprehensive selection of pipe identification tapes engineered for marine environments, meeting international safety standards.",
      getQuote: "Get Quote",
      dimensions: "Dimensions:",
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
      title: "Nuestra Gama de Productos",
      description:
        "Selección completa de cintas de identificación de tuberías diseñadas para entornos marinos, cumpliendo con estándares internacionales de seguridad.",
      getQuote: "Solicitar Presupuesto",
      dimensions: "Dimensiones:",
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
    return product.image || 'https://via.placeholder.com/300x200?text=Product+Image';
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
              <img 
                src={getProductImage(product)} 
                alt={product.name} 
                className={styles.productImage} 
              />
              <div className={styles.productContent}>
                <h3 className={styles.productTitle}>{product.name}</h3>
                <p className={styles.productDimensions}>
                  {t.dimensions} {product.dimensions}
                </p>
                <div className={styles.featuresGrid}>
                  {product.features.map((feature) => (
                    <div key={feature} className={styles.feature}>
                      <span className={styles.featureIcon}>✓</span>
                      <span>{t.features[feature]}</span>
                    </div>
                  ))}
                </div>
                <a href="#contact" className={styles.productButton}>
                  {t.getQuote} <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
