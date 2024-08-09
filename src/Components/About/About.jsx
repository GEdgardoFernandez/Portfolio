import styles from "./About.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Courses from "../Courses/Courses";

const About = () => {
    const [activeModal, setActiveModal] = useState(null);
    const closeModal = () => setActiveModal(null);
    const navigate = useNavigate();
    const [isOn, setIsOn] = useState(false);
    const handleClick = () => setIsOn(!isOn);
    const fullText = "Soy un Desarrollador Full Stack con una sólida formación autodidacta y continua. Poseo un profundo conocimiento en diagnóstico y solución de problemas técnicos en software y hardware, así como una comprensión detallada de sistemas operativos, aplicaciones, drivers, componentes de hardware y configuraciones de red. Inicié mi carrera en programación con el curso de Responsive Web Design en FreeCodeCamp, adquiriendo conocimientos en HTML, CSS y JavaScript. Luego, participé en el curso de Primeros Pasos en el Desarrollo Frontend de Argentina Programa 4.0, donde reforcé y mejoré mis habilidades. Posteriormente, completé el curso de Programador Full Stack en los proyectos T. Tec. San Juan, profundizando en Java, Spring y SQL, y desarrollando habilidades blandas clave como la comunicación efectiva y el trabajo en equipo. Actualmente, estoy graduado del curso Full Stack Developer en Henry, donde adquirí nuevos leguajes y herramientas para mejorar mi stack (React, Node.js, PostgreSQL, Axios, Express, Boostrap NPM, Redux, etc), y fortaleciendo habilidades blandas como paciencia, puntualidad, organización, trabajo en equipo, resolución de problemas, etc. Mis habilidades blandas me permiten colaborar en proyectos de alto rendimiento y compartir conocimientos de manera efectiva. Estoy altamente motivado y emocionado por la industria de software. Mi objetivo a largo plazo es contribuir al desarrollo de software en empresas de prestigio global. Mi constante deseo de aprender y mejorar mis habilidades me mantiene al día con las últimas tendencias y tecnologías en el mundo del desarrollo web y software."
    return (
        <div className={styles.container}>
            <div className={styles.about}>
                <span className={styles.title}>Sobre mi</span>
                <input type="checkbox" className={styles.check} onClick={handleClick}/>
                <p className={`${styles.text} ${isOn ? styles.encendido : styles.tenue}`}>{fullText}</p>
            </div>
            <div className={styles.containerButtons}>
                <button onClick={() => setActiveModal('courses')} className={styles.button}>Certificados</button>
                <Courses show={activeModal === 'courses'} onClose={closeModal} />
            </div>
        </div>
    );
};

export default About;