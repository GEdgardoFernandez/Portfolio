import style from "./Menu.module.css";
import { GiAnvilImpact, GiBiceps, GiDiploma, GiMedievalGate } from "react-icons/gi";

const Menu = () => {
    return (
        <div className={style.container}>
            <div>
                <ul className={style.wrapper}>
                    <li className={`${style.icon} ${style.black}`}>
                        <span className={style.tooltip}>Home</span>
                        <span><GiMedievalGate size={30} /></span>
                    </li>
                    <li className={`${style.icon} ${style.black}`}>
                        <span className={style.tooltip}>Projects</span>
                        <span><GiAnvilImpact size={30} /></span>
                    </li>
                    <li className={`${style.icon} ${style.black}`}>
                        <span className={style.tooltip}>Skills</span>
                        <span><GiBiceps size={30} /></span>
                    </li>
                    <li className={`${style.icon} ${style.black}`}>
                        <span className={style.tooltip}>Courses</span>
                        <span><GiDiploma size={30} /></span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;