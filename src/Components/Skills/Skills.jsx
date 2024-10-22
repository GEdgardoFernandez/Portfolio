import styles from './Skills.module.css';

const Skills = () => {
  return (
    <div>
      <h2>My Skills</h2>
      <div className={styles.skillBar}>
        <div className={styles.skillLevel} data-skill="html">HTML</div>
      </div>
      <div className={styles.skillBar}>
        <div className={styles.skillLevel} data-skill="css">CSS</div>
      </div>
      <div className={styles.skillBar}>
        <div className={styles.skillLevel} data-skill="javascript">JavaScript</div>
      </div>
      <div className={styles.skillBar}>
        <div className={styles.skillLevel} data-skill="react">React</div>
      </div>
    </div>
  );
};

export default Skills;