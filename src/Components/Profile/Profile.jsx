import style from "./Profile.module.css";
import imageP from "..//..//Assets/img/Perfil.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardInfo from "../CardInfo/Cardinfo";
import NeonSign from "../NeonSign/NeonSign";
const Profile = () => {
    const [isNeonActive, setIsNeonActive] = useState(false);

    const handleToggleNeon = () => {
        setIsNeonActive(!isNeonActive);
    };
    const navigate = useNavigate();

    return (
        <div className={style.container}>
            <div className={style.neonBackground}>
                <NeonSign text="HTML" isActive={isNeonActive} />
                <NeonSign text="CSS" isActive={isNeonActive} />
                <NeonSign text="JavaScript" isActive={isNeonActive} />
                <NeonSign text="React" isActive={isNeonActive} />
                <NeonSign text="Node.js" isActive={isNeonActive} />
            </div>

            <div className={style.profile}>
            <button onClick={handleToggleNeon} className={style.toggleButton}>
                {isNeonActive ? 'Apagar Neon' : 'Encender Neon'}
            </button>

                <img src={imageP} alt="Foto de perfil" />
                <h1>Guillermo Fernandez</h1>
                <h4>Full Stack Developer</h4>
            </div>
        </div>
    );
};

export default Profile;