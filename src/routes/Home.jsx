import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import WhyUs from '../components/WhyUs/WhyUs';
import Regulations from '../components/Regulations/Regulations';
import Contact from '../components/Contact/Contact';

const Home = () => {
  const [language] = useOutletContext();

  return (
    <div>
      <Hero language={language} />
      <Products language={language} />
      <HowItWorks language={language} />
      <WhyUs language={language} />
      <Regulations language={language} />
      <Contact language={language} />
    </div>
  );
};

export default Home;
