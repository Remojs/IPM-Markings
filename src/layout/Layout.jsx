import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './Layout.module.css';

const Layout = () => {
  const [language, setLanguage] = useState('en');

  return (
    <div className={styles.layout}>
      <Navbar language={language} setLanguage={setLanguage} />
      <main className={styles.main}>
        <Outlet context={[language, setLanguage]} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Layout;
