import style from "./Proyects.module.css";
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import image from "..//..//Assets/img/capProyects/appgame1.png";
import image2 from "..//..//Assets/img/capProyects/appgame2.png";
import rick from "..//..//Assets/img/capProyects/rickandomorty.png";
import rick2 from "..//..//Assets/img/capProyects/rickandmorty2.png";
import rick3 from "..//..//Assets/img/capProyects/rickandmorty3.png";
import tictactoe from "..//..//Assets/img/capProyects/tictactoe.png";
import tictactoe2 from "..//..//Assets/img/capProyects/tictactoe2.png";
import ahorcado from "..//..//Assets/img/capProyects/ahorcado.png";
import ahorcado2 from "..//..//Assets/img/capProyects/ahorcado2.png";
const Proyects = ({ show, onClose }) => {
    if (!show) {
        return null; // No mostrar el modal si show es false
    }
    return (
        <div className={style.proyectsModal}>
            <h1>Proyectos</h1>
            <div className={style.containerSection}>
                <div className={style.containerPro}>
                    <h3>Proyecto Individual - Henry</h3>
                    <img src={image} alt="" className={style.image} />
                    <img src={image2} alt="" className={style.image} />
                    <p className={style.description}>Este proyecto es una SPA creada con React, que permite al usuario realizar busquedas de videojuegos y ver distinta informacion de los mismos, como asi tambien agregar juegos a una base de datos.</p>
                    <div>
                        <p>Tecnologias Usadas</p>
                        <div>
                            <FaReact size={30} />
                            <IoLogoJavascript size={30} />
                            <FaCss3Alt size={30} />
                            <BiLogoPostgresql size={30} />
                        </div>
                    </div>
                    <a href="https://github.com/GEdgardoFernandez/gameappeando" target="_blank">Ver más...</a>
                </div>
                <div className={style.containerPro}>
                    <h3>Proyecto Integrador - Henry</h3>
                    <img src={rick} alt="" className={style.image} />
                    <img src={rick2} alt="" className={style.image} />
                    <img src={rick3} alt="" className={style.image} />
                    <p className={style.description}>Este proyecto es una SPA de una Wiki de Rick and Morty, trae personajes de una API, y los renderiza en la pagina principal, posee filtros y buscador para personajes.</p>
                    <div>
                        <p>Tecnologias Usadas</p>
                        <div>
                            <FaReact size={30} />
                            <IoLogoJavascript size={30} />
                            <FaCss3Alt size={30} />
                        </div>
                    </div>
                    <a href="https://github.com/GEdgardoFernandez/RickAndMorty" target="_blank">Ver más...</a>
                </div>
                <div className={style.containerPro}>
                    <h3>TicTacToe</h3>
                    <img src={tictactoe} alt="" className={style.image} />
                    <img src={tictactoe2} alt="" className={style.image} />
                    <p className={style.description}>Este es uno de mis primeros proyectos, es el juego tic-tac-toe, esta hecho solo con HTML, CSS y JavaScript.</p>
                    <div>
                        <p>Tecnologias Usadas</p>
                        <div>
                        <FaHtml5 size={30}/>
                            <IoLogoJavascript size={30} />
                            <FaCss3Alt size={30} />
                        </div>
                    </div>
                    <a href="https://github.com/GEdgardoFernandez/tictactoe" target="_blank">Ver más...</a>
                </div>
                <div className={style.containerPro}>
                    <h3>TicTacToe</h3>
                    <img src={ahorcado} alt="" className={style.image} />
                    <img src={ahorcado2} alt="" className={style.image} />
                    <p className={style.description}>Este es mi primer proyecto, es el juego de ahorcados, esta hecho solo con HTML, CSS y JavaScript.</p>
                    <div>
                        <p>Tecnologias Usadas</p>
                        <div>
                        <FaHtml5 size={30}/>
                            <IoLogoJavascript size={30} />
                            <FaCss3Alt size={30} />
                        </div>
                    </div>
                    <a href="https://github.com/GEdgardoFernandez/GameAhorcado" target="_blank">Ver más...</a>
                </div>
            </div>
            <button onClick={onClose} className={style.closeButton}>X</button>
        </div>
    )
}

export default Proyects