import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <h2>Welcome to Guillermo's Portfolio</h2>
      <p>Full Stack Developer with a passion for innovation and clean code.</p>
    </section>
  );
};

export default HeroSection;