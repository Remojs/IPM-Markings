import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Products from '../components/Products/Products';
import Contact from '../components/Contact/Contact';

const ProductsPage = () => {
  const [language] = useOutletContext();

  return (
    <div>
      <div style={{ paddingTop: '5rem' }}></div>
      <Products language={language} />
      <Contact language={language} />
    </div>
  );
};

export default ProductsPage;
