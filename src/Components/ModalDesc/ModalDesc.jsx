import style from "./ModalDesc.module.css";


const ModalDesc = ({show, closed}) => {
    if (!show) {
        return null; // No mostrar el modal si show es false
    }
    return (
        <div className={style.container}>
            <div className={style.modalContent}>
                <p>Soy un Desarrollador Full Stack con un background en educación autodidacta y formación continua. Comencé mi viaje en el mundo de la programación con el curso de Responsive Web Design en FreeCodeCamp, donde adquirí conocimientos básicos de HTML, CSS y JavaScript. Luego, reforcé y mejoré dichos conocimientos en el curso de Primeros Pasos en el Desarrollo Frontend de Argentina Programa 4.0.
                    Mi aprendizaje continuó con el curso de Programador Full Stack en el marco de los proyectos T. Tec. San Juan, donde no solo reforcé y mejoré los conocimientos que ya tenía, sino que también aprendí Java, Spring y SQL. Durante este tiempo, también desarrollé habilidades blandas importantes, como la comunicación efectiva y el trabajo en equipo.
                    Actualmente, estoy estudiando en Henry, donde he mejorado aún más mis habilidades blandas y he sumado nuevas habilidades como paciencia, puntualidad y organización de mis tiempos. Además, he adquirido conocimientos en React, Node.js, PostgreSQL, Axios, Express y NPM.
                    Estoy especializado en el desarrollo de Front End y estoy mejorando en Back End con las tecnologías antes mencionadas. Mi nivel de inglés es básico
                </p>
            </div>
            <button onClick={closed} className={style.closeButton}>X</button>
        </div>
    );
};  

export default ModalDesc;