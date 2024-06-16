import { Link } from "react-router-dom";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
const Proyects = ({ show, closed }) => {
    if (!show) {
        return null; // No mostrar el modal si show es false
    }
    return (
        <div>
            <h1>Proyectos</h1>
            <div>
                <h3>Proyecto Individual - Henry</h3>
                <img src="" alt="" />
                <img src="" alt="" />
                <p>Este proyecto es una SPA creada con React, que permite al usuario realizar busquedas de videojuegos y ver distinta informacion de los mismos, como asi tambien agregar juegos a una base de datos.</p>
                <div>
                    <p>Tecnologias Usadas</p>
                    <div>
                        <FaReact />
                        <IoLogoJavascript />
                        <FaCss3Alt />
                        <BiLogoPostgresql />
                    </div>
                </div>
                <Link to="https://github.com/GEdgardoFernandez/gameappeando">Ver mas...</Link>
            </div>
            <button onClick={closed}>X</button>
        </div>
    )
}