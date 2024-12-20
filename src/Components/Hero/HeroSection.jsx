import React, { useState, useEffect, useRef } from 'react';
import styles from './HeroSection.module.css';
import Welcome from '../Welcome/Welcome';

const HeroSection = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const typedText = typedTextRef.current;
    const texts = ["Frontend Developer."]; 
    let index = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

    function type() {
      currentText = texts[index];

      if (isDeleting) {
        typedText.textContent = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
          isDeleting = false;
          index = (index + 1) % texts.length;
          setTimeout(type, 500);
        } else {
          setTimeout(type, 100);
        }
      } else {
        typedText.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
          isDeleting = true;
          setTimeout(type, 1500); 
        } else {
          setTimeout(type, 100);
        }
      }
    }

    if (typedText) {
      type();
    }
  }, []);

  return (
    <section className={styles.hero}>
      <h2><Welcome /></h2>
      <p ref={typedTextRef} className={styles.typedText}></p>
      <p></p>
    </section>
  );
};

export default HeroSection;
