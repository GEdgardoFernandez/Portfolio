import style from "./Courses.module.css";
import cert from "..//..//Assets/img/cert/certificado01.jpg";
import cert2 from "..//..//Assets/img/cert/certificado02.jpg";
import cert3 from "..//..//Assets/img/cert/certificado03.png";
import cert4 from "..//..//Assets/img/cert/certificado04.jpg";
import cert5 from "..//..//Assets/img/cert/certificado05.jpg";
import { useState } from "react";

const Courses = ({ show, onClose }) => {
    const [zoomedImage, setZoomedImage] = useState(null);

    if (!show) return null;

    const handleImageClick = (src) => {
        setZoomedImage(zoomedImage === src ? null : src);
    };

    return (
        <div className={style.container}>
            <h1>Courses</h1>
            <div className={style.containerImg}>
                {[cert, cert2, cert3, cert4, cert5].map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Certificado ${index + 1}`}
                        className={zoomedImage === src ? style.zoomed : ''}
                        onClick={() => handleImageClick(src)}
                    />
                ))}
            </div>
            <button onClick={onClose} className={style.closeButton}>X</button>
        </div>
    );
};

export default Courses