import React from 'react';
import Header from '../Components/Header/Header';
import HeroSection from '../Components/Hero/HeroSection';
import ProjectsSection from '../Components/ProyectsSection/Proyects';
import SkillsSection from '../Components/SkillSections/SkillSections';
import ThemeToggle from '../Components/ThemeTogle/ThemeTogle';
import ScrollAnimation from '../Components/ScrollAnimation/ScrollAnimation';
import Footer from '../Components/Footer/Footer';
import styles from './Home.module.css';
import WaveBackground from '../Components/WaveBackground/WaveBackground';
import AnimatedBackground from '../Components/AnimatedBackground/AnimatedBackground';

const Home = () => {
  return (
    <div className={styles.home}>
      <AnimatedBackground  />
    
      <Header />

      <HeroSection />

      <ScrollAnimation>
        <ProjectsSection />
      </ScrollAnimation>

      <ScrollAnimation>
        <SkillsSection />
      </ScrollAnimation>

      <ScrollAnimation>
        <Footer />
      </ScrollAnimation>
    </div>
  );
};

export default Home;