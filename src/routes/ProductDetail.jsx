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
      requestQuote: "Request Quote",
      backToProducts: "Back to Products"
    },
    es: {
      breadcrumbs: {
        home: "Inicio",
        products: "Productos"
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
    if (!product.image) return 'https://via.placeholder.com/600x400?text=Product+Image';
    // Add .png extension if missing
    if (!product.image.endsWith('.png') && product.image.includes('/src/assets/ISO/')) {
      return `${product.image}.png`;
    }
    return product.image;
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
              <h1 className={styles.productTitle}>
                {language === 'en' 
                  ? (product.name_en || `${product.name} Pipe`)
                  : (product.name_es || `Cinta ${product.name}`)
                }
              </h1>
              <p className={styles.productDescription}>
                {language === 'en'
                  ? (product.description_en || product.description || 'High-quality pipe marking tape for marine environments, compliant with BS1710 standards.')
                  : (product.description_es || product.description || 'Cinta de marcado de tuberías de alta calidad para entornos marinos, conforme con los estándares BS1710.')
                }
              </p>
              
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
