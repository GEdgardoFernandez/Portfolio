import styles from "./About.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Courses from "../Courses/Courses";

const About = () => {
        return (
          <div className={styles.about}>
            <h2 className={styles.title}>Sobre mí</h2>
            <p>¡Hola! Soy [tu nombre], un desarrollador Front-End apasionado por crear experiencias web únicas y funcionales. Desde que descubrí mi amor por el código, he estado dedicado a perfeccionar mis habilidades y aprender nuevas tecnologías.</p>
            
            <h3 className={styles.subtitle}>Experiencia</h3>
            <ul>
              <li>HTML & CSS: Para construir estructuras sólidas y estilos atractivos.</li>
              <li>JavaScript: Para agregar interactividad y dinamismo a las páginas.</li>
              <li>React: Mi biblioteca favorita para crear interfaces de usuario modernas y eficientes.</li>
            </ul>
            
            <h3 className={styles.subtitle}>Filosofía</h3>
            <p>Creo firmemente en el poder del diseño centrado en el usuario. Cada proyecto que emprendo, lo hago con el objetivo de mejorar la experiencia del usuario final, asegurándome de que cada detalle está perfectamente pulido.</p>
            
            <h3 className={styles.subtitle}>Pasatiempos</h3>
            <p>Cuando no estoy escribiendo código, me encanta [tu hobby] y [tu hobby]. Creo que estas actividades no solo me relajan, sino que también inspiran mi creatividad y me ayudan a pensar de manera innovadora.</p>
            
            <h3 className={styles.subtitle}>Contacto</h3>
            <p>Estoy siempre abierto a nuevas oportunidades y colaboraciones. No dudes en ponerte en contacto conmigo a través de [tu correo electrónico] o [tu enlace a LinkedIn].</p>
          </div>
        );
      };

export default About;