import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaNpm, FaGithub } from 'react-icons/fa';
import { BiLogoPostgresql } from "react-icons/bi";
import styles from './SkillsIcons.module.css';

const SkillsIcons = () => {
  return (
    <div className={styles.skillsContainer} id='Skills'>
      <div className={styles.iconContainer}>
        <FaHtml5 className={styles.icon} />
        <span className={styles.tooltip}>HTML5</span>
      </div>
      <div className={styles.iconContainer}>
        <FaCss3Alt className={styles.icon} />
        <span className={styles.tooltip}>CSS3</span>
      </div>
      <div className={styles.iconContainer}>
        <FaJsSquare className={styles.icon} />
        <span className={styles.tooltip}>JavaScript</span>
      </div>
      <div className={styles.iconContainer}>
        <FaReact className={styles.icon} />
        <span className={styles.tooltip}>React</span>
      </div>
      <div className={styles.iconContainer}>
        <FaNode className={styles.icon} />
        <span className={styles.tooltip}>React Native</span>
      </div>
      <div className={styles.iconContainer}>
        <FaNpm className={styles.icon} />
        <span className={styles.tooltip}>NPM</span>
      </div>
      <div className={styles.iconContainer}>
        <FaGithub className={styles.icon} />
        <span className={styles.tooltip}>GitHub</span>
      </div>
      <div className={styles.iconContainer}>
        <BiLogoPostgresql className={styles.icon} />
        <span className={styles.tooltip}>PostgreSQL</span>
      </div>
    </div>
  );
};

export default SkillsIcons;
