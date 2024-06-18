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
    return (
        <div className={style.profile}>
            <button className={style.button}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <h1>{isHovered ? 'Click Me for more!!!' : 'Hello!!'}</h1>
            </button>

            <img src={imageP} alt="Foto de perfil" />
            <h4>Full Stack Developer</h4>
            <CardInfo show={isModalVisible} closed={() => setIsModalVisible(false)} />
        </div>
        
    );
};

export default Profile;