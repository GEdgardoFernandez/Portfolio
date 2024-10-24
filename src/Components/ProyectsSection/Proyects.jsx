import React from 'react';
import ProjectCard from '..//CardProyects/CardProjects';
import styles from './Proyects.module.css';
import projects from '../../Assets/Data/Projects';

const ProjectsSection = () => {


  return (
    <section className={styles.projects}>
      <h2 className={styles.title} id='Projects'>Projects</h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;