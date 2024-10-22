import React from 'react';
import styles from './SkillSections.module.css';

const SkillsSection = () => {
  return (
    <section className={styles.skills}>
      <h2>My Skills</h2>
      <div className={styles.skillBar}>
        <div className={styles.skillLevel} data-skill="html"><span>HTML</span></div>
      </div>
      <div className={styles.skillBar}>
        <div className={styles.skillLevel} data-skill="css"><span>CSS</span></div>
      </div>
      <div className={styles.skillBar}>
        <div className={styles.skillLevel} data-skill="javascript"><span>JavaScript</span></div>
      </div>
      <div className={styles.skillBar}>
        <div className={styles.skillLevel} data-skill="react"><span>React</span></div>
      </div>
      <div className={styles.skillBar}>
        <div className={styles.skillLevel} data-skill="node"><span>Node</span></div>
      </div>
      <div className={styles.skillBar}>
        <div className={styles.skillLevel} data-skill="postgresql"><span>PostgreSQL</span></div>
      </div>
      <div className={styles.skillBar}>
        <div className={styles.skillLevel} data-skill="typescript"><span>TypeScrip</span></div>
      </div>
    </section>
  );
};

export default SkillsSection;