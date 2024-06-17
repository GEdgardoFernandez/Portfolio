import style from "./Profile.module.css";
import imageP from "..//..//Assets/img/Perfil.png"
import ModalDesc from "../ModalDesc/ModalDesc";
import { useState } from "react";
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
    return (
        <div className={style.profile}>
            <button className={style.button} onClick={handleClick}>
                <h1>{isHovered ? 'CLICK ME' : 'Guillermo Fernandez'}</h1>
            </button>
            <ModalDesc show={isModalVisible} closed={() => setIsModalVisible(false)} />
            <img src={imageP} alt="Foto de perfil" />
            <h4>Full Stack Developer</h4>
        </div>
    );
};

export default Profile;