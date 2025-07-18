import React from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import productsData from '../data/products.json';
import Contact from '../components/Contact/Contact';
import styles from '../components/ProductDetail/ProductDetail.module.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [language] = useOutletContext();
  const product = productsData.find(p => p.id === parseInt(id, 10));

  const translations = {
    en: {
      breadcrumbs: {
        home: "Home",
        products: "Products"
      },
      dimensions: "Dimensions:",
      features: "Key Features:",
      featureNames: {
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
      },
      requestQuote: "Request Quote",
      backToProducts: "Back to Products"
    },
    es: {
      breadcrumbs: {
        home: "Inicio",
        products: "Productos"
      },
      dimensions: "Dimensiones:",
      features: "Características Principales:",
      featureNames: {
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
      },
      requestQuote: "Solicitar Presupuesto",
      backToProducts: "Volver a Productos"
    }
  };

  const t = translations[language];

  if (!product) {
    return (
      <div className={styles.productDetail}>
        <div className={styles.container}>
          <p>Product not found</p>
          <Link to="/products" className={styles.secondaryButton}>
            {t.backToProducts}
          </Link>
        </div>
      </div>
    );
  }

  // Use a placeholder image if product image is not available
  const getProductImage = (product) => {
    return product.image || 'https://via.placeholder.com/600x400?text=Product+Image';
  };

  return (
    <>
      <div className={styles.productDetail}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link to="/" className={styles.breadcrumbLink}>{t.breadcrumbs.home}</Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <Link to="/products" className={styles.breadcrumbLink}>{t.breadcrumbs.products}</Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span>{product.name}</span>
          </div>
          
          <div className={styles.productContainer}>
            <div className={styles.imageContainer}>
              <img 
                src={getProductImage(product)} 
                alt={product.name} 
                className={styles.productImage} 
              />
            </div>
            
            <div className={styles.productInfo}>
              <h1 className={styles.productTitle}>{product.name}</h1>
              <p className={styles.productPrice}>${product.price}</p>
              <p className={styles.productDescription}>{product.description}</p>
              <p className={styles.productDimensions}>
                <strong>{t.dimensions}</strong> {product.dimensions}
              </p>
              
              <h3 className={styles.featuresTitle}>{t.features}</h3>
              <div className={styles.featuresList}>
                {product.features.map((feature) => (
                  <div key={feature} className={styles.feature}>
                    <span className={styles.featureIcon}>✓</span>
                    <span>{t.featureNames[feature]}</span>
                  </div>
                ))}
              </div>
              
              <div className={styles.actionButtons}>
                <a href="#contact" className={styles.primaryButton}>
                  {t.requestQuote} <span>→</span>
                </a>
                <Link to="/products" className={styles.secondaryButton}>
                  {t.backToProducts}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Contact language={language} />
    </>
  );
};

export default ProductDetail;
