import React, { useEffect } from 'react';
import styles from './ParticleBackground.module.css';

const ParticleBackground = () => {
  useEffect(() => {
    const particleBackground = document.getElementById('particle-background');
    
    // Vaciar el contenedor antes de añadir nuevas partículas (si es necesario)
    while (particleBackground.firstChild) {
      particleBackground.removeChild(particleBackground.firstChild);
    }
    
    // Crear partículas y añadirlas al contenedor
    const particles = Array.from({ length: 100 }, (_, i) => {
      const particle = document.createElement('div');
      particle.className = styles.particle;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
      return particle;
    });
    particles.forEach(particle => particleBackground.appendChild(particle));
  }, []);

  return <div id="particle-background" className={styles.particleBackground}></div>;
};


export default ParticleBackground;