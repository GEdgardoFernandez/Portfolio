import React, { useState, useEffect } from 'react';
import styles from './Welcome.module.css';

const Welcome = () => {
  const [languageIndex, setLanguageIndex] = useState(0);
  const languages = ['Bienvenido', 'Welcome', 'Bienvenue', 'Benvenuto'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 4000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.welcome}>
      {languages[languageIndex]}
    </div>
  );
};

export default Welcome;