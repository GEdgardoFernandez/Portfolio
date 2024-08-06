import style from "./Profile.module.css";
import imageP from "..//..//Assets/img/Perfil.png"
import { useState } from "react";
import CardInfo from "../CardInfo/Cardinfo";
const Profile = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleClick = () => {
        setIsModalVisible(true);
    }
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const fullText = "Soy un Desarrollador Full Stack con una sólida formación autodidacta y continua. Poseo un profundo conocimiento en diagnóstico y solución de problemas técnicos en software y hardware, así como una comprensión detallada de sistemas operativos, aplicaciones, drivers, componentes de hardware y configuraciones de red. Inicié mi carrera en programación con el curso de Responsive Web Design en FreeCodeCamp, adquiriendo conocimientos en HTML, CSS y JavaScript. Luego, participé en el curso de Primeros Pasos en el Desarrollo Frontend de Argentina Programa 4.0, donde reforcé y mejoré mis habilidades. Posteriormente, completé el curso de Programador Full Stack en los proyectos T. Tec. San Juan, profundizando en Java, Spring y SQL, y desarrollando habilidades blandas clave como la comunicación efectiva y el trabajo en equipo. Actualmente, estoy graduado del curso Full Stack Developer en Henry, donde adquirí nuevos leguajes y herramientas para mejorar mi stack (React, Node.js, PostgreSQL, Axios, Express, Boostrap NPM, Redux, etc), y fortaleciendo habilidades blandas como paciencia, puntualidad, organización, trabajo en equipo, resolución de problemas, etc. Mis habilidades blandas me permiten colaborar en proyectos de alto rendimiento y compartir conocimientos de manera efectiva. Estoy altamente motivado y emocionado por la industria de software. Mi objetivo a largo plazo es contribuir al desarrollo de software en empresas de prestigio global. Mi constante deseo de aprender y mejorar mis habilidades me mantiene al día con las últimas tendencias y tecnologías en el mundo del desarrollo web y software."
    const shortText = fullText.substring(0, 316) + "...";
    return (
        <div className={style.container}>
            <div className={style.profile}>
                <button className={style.button}
                    onClick={handleClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <h1>{isHovered ? 'Saber más' : 'Hola'}</h1>
                </button>

                <img src={imageP} alt="Foto de perfil" />
                <h1>Guillermo Fernandez</h1>
                <h4>Full Stack Developer</h4>
            </div>
            <div className={style.par}>
                <p>{isExpanded ? fullText : shortText}</p>
                <button onClick={handleToggle} className={style.toggleButton}>
                    {isExpanded ? 'Mostrar menos' : 'Leer más'}
                </button>
            </div>
        </div>
    );
};

export default Profile;