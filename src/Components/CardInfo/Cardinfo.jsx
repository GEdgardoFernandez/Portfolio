import style from "./Cardinfo.module.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
const CardInfo = ({ show, closed }) => {
    if (!show) return null;
    return (
        <div className={style.container}>
            <div className={style.card}>
                <div className={style.nameContainer}>
                    <p>Soy un Desarrollador Full Stack con una educación autodidacta y formación continua. Comencé mi viaje en el mundo de la programación con el curso de Responsive Web Design en FreeCodeCamp, donde adquirí conocimientos básicos de HTML, CSS y JavaScript. Luego, reforcé y mejoré dichos conocimientos en el curso de Primeros Pasos en el Desarrollo Frontend de Argentina Programa 4.0.
                    Mi aprendizaje continuó con el curso de Programador Full Stack en el marco de los proyectos T. Tec. San Juan, donde no solo reforcé y mejoré los conocimientos que ya tenía, sino que también aprendí Java, Spring y SQL. Durante este tiempo, también desarrollé habilidades blandas importantes, como la comunicación efectiva y el trabajo en equipo.
                    Actualmente, estoy estudiando en Henry, donde he mejorado aún más mis habilidades blandas y he sumado nuevas habilidades como paciencia, puntualidad y organización de mis tiempos. Además, he adquirido conocimientos en React, Node.js, PostgreSQL, Axios, Express y NPM.
                    Estoy especializado en el desarrollo de Front End y estoy mejorando en Back End con las tecnologías antes mencionadas. Mi nivel de inglés es básico</p>
                </div>
                <div className={style.infoContainer}>
                    <button href="https://github.com/GEdgardoFernandez" target="_blank" rel="noreferrer"><FaGithub size={30} /></button>
                    <button href="https://www.linkedin.com/in/guillermo-fernandez-9b0b27208/" target="_blank" rel="noreferrer"><FaLinkedinIn size={30} /></button>
                </div>
            </div>
            <button onClick={closed} className={style.closeButton}><IoMdCloseCircle size={40} /></button>
        </div>
    );
}

export default CardInfo;