import React, { useState } from 'react';
import styles from './About.module.css';
import ProfilePic from '../../Assets/img/Perfil.png';
import Modal from '../ModalDesc/Modal'; 
import certificates from '../../Assets/Data/Certificates';

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={styles.about}>
      <h2 className={styles.title}>Sobre mí</h2>

      <div className={styles.content}>
        <img src={ProfilePic} alt="Guillermo Fernandez" className={styles.profilePic} />
        <div className={styles.text}>
          <p>¡Hola! Soy Guillermo Fernandez, un desarrollador Front-End apasionado por crear experiencias web únicas y funcionales. Desde que descubrí mi amor por el código, he estado dedicado a perfeccionar mis habilidades y aprender nuevas tecnologías.</p>

          <p><strong>Filosofía:</strong> Creo firmemente en el poder del diseño centrado en el usuario. Cada proyecto que emprendo, lo hago con el objetivo de mejorar la experiencia del usuario final, asegurándome de que cada detalle está perfectamente pulido.</p>

          <p><strong>Pasatiempos:</strong> Cuando no estoy escribiendo código, me encanta jugar videojuegos, leer, pasar tiempo con familia y amigos. Creo que estas actividades no solo me relajan, sino que también inspiran mi creatividad y me ayudan a pensar de manera innovadora.</p>

          <p><strong>Contacto:</strong> Estoy siempre abierto a nuevas oportunidades y colaboraciones. No dudes en ponerte en contacto conmigo a través de <a href="mailto:gecozzi87@gmail.com"><span>mi correo</span></a> o <a href="https://www.linkedin.com/in/guillermo-fern%C3%A1ndez-703b50267/" target="_blank"><span>mi LinkedIn</span></a>.</p>

          <p><strong>Educación:</strong> <a href="#" onClick={handleModalToggle}><span>Ver certificaciones</span></a></p>
        </div>
      </div>

      <Modal show={showModal} onClose={handleModalToggle}>
        {certificates.map((certificate, index) => (
          <div key={index} className={styles.certificate}>
            <div className={styles.certificateContent}>
              <p className={styles.certificateTitle}>{certificate.title}</p>
              <img src={certificate.image} alt={certificate.title} className={styles.certificateImage} />
              <p className={styles.certificateInsti}><a href={certificate.link} target="_blank">{certificate.insti}</a></p>
            </div>

          </div>
        ))}
      </Modal>
    </div>
  );
};

export default About;
