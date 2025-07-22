import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';
import WhyUs from '../components/WhyUs/WhyUs';
import Contact from '../components/Contact/Contact';

const Home = () => {
  const [language] = useOutletContext();

  return (
    <div>
      <Hero language={language} />
      <Products language={language} />
      <WhyUs language={language} />
      <Contact language={language} />
    </div>
  );
};

export default Home;
