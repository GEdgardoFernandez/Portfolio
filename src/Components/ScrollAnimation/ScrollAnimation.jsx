import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './ScrollAnimation.module.css';

const ScrollAnimation = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`${styles.fadeIn} ${inView ? styles.fadeInVisible : ''}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;