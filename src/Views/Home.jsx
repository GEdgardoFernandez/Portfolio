import React from 'react';
import Header from '../Components/Header/Header';
import HeroSection from '../Components/Hero/HeroSection';
import ProjectsSection from '../Components/ProyectsSection/Proyects';
import SkillsSection from '../Components/SkillSections/SkillSections';
import ThemeToggle from '../Components/ThemeTogle/ThemeTogle';
import ScrollAnimation from '../Components/ScrollAnimation/ScrollAnimation';
import Footer from '../Components/Footer/Footer';
import styles from './Home.module.css'; // Si tienes estilos globales

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Header con barra de navegación */}
      <Header />

      {/* Botón de toggle para cambiar entre tema claro/oscuro */}
      <ThemeToggle />

      {/* Sección Hero */}
      <HeroSection />

      {/* Sección de Proyectos */}
      <ScrollAnimation>
        <ProjectsSection />
      </ScrollAnimation>

      {/* Sección de Habilidades */}
      <ScrollAnimation>
        <SkillsSection />
      </ScrollAnimation>

      {/* Sección de Testimonios */}
      <ScrollAnimation>
        <Footer />
      </ScrollAnimation>
    </div>
  );
};

export default Home;