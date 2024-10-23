import React from 'react';
import styles from './SkillSections.module.css';
import SkillsIcons from '../SkillsIcons/SkillsIcons';

const SkillsSection = () => {
  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>My Skills</h2>
      <SkillsIcons />
    </section>
  );
};

export default SkillsSection;