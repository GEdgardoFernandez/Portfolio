import React from 'react';
import ProjectCard from '..//CardProyects/CardProjects'; // El componente que creaste antes
import styles from './Proyects.module.css';
import projects from '../../Assets/Data/Projects';

const ProjectsSection = () => {


  return (
    <section className={styles.projects}>
      <h2>Featured Projects</h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;