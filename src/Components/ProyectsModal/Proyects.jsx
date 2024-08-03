import styles from "./Proyects.module.css";
import  projects  from "..//..//Assets/Data/Projects.js";

const Proyects = () => {

    return (
        <div className={styles.work}>
        <h2>My Projects</h2>
        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <div key={index} className={styles.project}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.images}>
                <img src={project.img1} alt={`${project.title} screenshot 1`} />
                <img src={project.img2} alt={`${project.title} screenshot 2`} />
              </div>
              <div className={styles.stack}>
                {project.stack.map((IconComponent, idx) => (
                  <IconComponent key={idx} className={styles.stackIcon} />
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">Learn More</a>
              <a href={project.repo} target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Proyects