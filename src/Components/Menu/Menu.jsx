import style from "./Menu.module.css";
import { useState } from "react";

import { GrContact, GrHome, GrCli, GrUser  } from "react-icons/gr";


import { useNavigate } from "react-router-dom";
const Menu = () => {
    const navigate = useNavigate();

    return (
        <div className={style.container}>
            <div>
                <ul className={style.wrapper}>
                    <li className={`${style.icon} ${style.black}`} onClick={() => navigate('/home')}>
                        <span className={style.tooltip}>Home</span>
                        <span><GrHome size={30} /></span>
                    </li>
                    <li className={`${style.icon} ${style.black}`} onClick={() => navigate('/projects')}>
                        <span className={style.tooltip}>Proyectos</span>
                        <span><GrCli size={30} /></span>
                    </li>
                    <li className={`${style.icon} ${style.black}`} onClick={() => navigate('/contact')}>
                        <span className={style.tooltip}>Contactame</span>
                        <span><GrContact size={30} /></span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;