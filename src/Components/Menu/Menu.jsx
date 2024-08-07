import style from "./Menu.module.css";
import { useState } from "react";
import { GiAnvilImpact, GiBiceps, GiDiploma, GiMedievalGate } from "react-icons/gi";
import Proyects from "../ProyectsModal/Proyects";
import Courses from "../Courses/Courses";
import Skills from "../Skills/Skills";
import { useNavigate } from "react-router-dom";
const Menu = () => {
    const navigate = useNavigate();
    const [activeModal, setActiveModal] = useState(null); // Estado único para manejar qué modal está activo

    const closeModal = () => setActiveModal(null); // Función para cerrar modales
    return (
        <div className={style.container}>
            <div>
                <ul className={style.wrapper}>
                    <li className={`${style.icon} ${style.black}`} onClick={() => navigate('/projects')}>
                        <span className={style.tooltip}>Projects</span>
                        <span><GiAnvilImpact size={30} /></span>
                    </li>
                    <li className={`${style.icon} ${style.black}`} onClick={() => navigate('/about')}>
                        <span className={style.tooltip}>Skills</span>
                        <span><GiBiceps size={30} /></span>
                    </li>
                    <li className={`${style.icon} ${style.black}`} onClick={() => setActiveModal('courses')}>
                        <span className={style.tooltip}>Courses</span>
                        <span><GiDiploma size={30} /></span>
                    </li>
                </ul>
            </div>
            <Courses show={activeModal === 'courses'} onClose={closeModal} />
            <Skills show={activeModal === 'skills'} onClose={closeModal} />
        </div>
    );
};

export default Menu;