import style from "./Profile.module.css";
import imageP from "..//..//Assets/img/Perfil.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardInfo from "../CardInfo/Cardinfo";
const Profile = () => {

    const navigate = useNavigate();

    return (
        <div className={style.container}>
            <div className={style.profile}>

                <img src={imageP} alt="Foto de perfil" />
                <h1>Guillermo Fernandez</h1>
                <h4>Full Stack Developer</h4>
            </div>
        </div>
    );
};

export default Profile;