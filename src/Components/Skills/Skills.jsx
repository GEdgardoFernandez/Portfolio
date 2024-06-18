import style from "./Skills.module.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoMdCloseCircle } from "react-icons/io";

const Skills = ({ show, onClose }) => {
    if (!show) return null;
    return (
        <div className={style.containerAll}>
            <h1 className={style.title}>My Skills</h1>
            <div className={style.container}>
                <button onClick={onClose} className={style.closeButton}><IoMdCloseCircle size={40} /></button>
                <div className={style.wrapper}>
                    <div className={style.icon}>
                        <FaHtml5 size={30} />
                        <span>HTML</span>
                    </div>
                    <div className={style.icon}>
                        <FaCss3Alt size={30} />
                        <span>CSS</span>
                    </div>
                    <div className={style.icon}>
                        <FaJs size={30} />
                        <span>JavaScript</span>
                    </div>
                    <div className={style.icon}>
                        <FaReact size={30} />
                        <span>React</span>
                    </div>
                    <div className={style.icon}>
                        <FaNodeJs size={30} />
                        <span>Node</span>
                    </div>
                    <div className={style.icon}>
                        <FaGitAlt size={30} />
                        <span>Git</span>
                    </div>
                    <div className={style.icon}>
                        <BiLogoPostgresql size={30} />
                        <span>Postgres</span>
                    </div>
                    <div className={style.icon}>
                        <FaGithub size={30} />
                        <span>GitHub</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;