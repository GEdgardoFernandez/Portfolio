import styles from './CardsProjects.module.css';

const ProjectCard = ({ title, description, img1, stack, repo }) => {
  return (
    <div className={styles.projectCard}>
      <img src={img1} alt={title} className={styles.projectImage} />
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        <div className={styles.projectStack}>
          {stack.map((IconComponent, idx) => (
            <IconComponent key={idx} className={styles.stackIcon} />
          ))}
        </div>
        <button className={styles.projectButton} >View Repo</button>
      </div>
    </div>
  );
};

export default ProjectCard;