import styles from "./Loading.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import banner from "../../Assets/img/C.png";

const Loading = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            navigate('/home'); // Navega a Home después de 3 segundos
        }, 9000);

        // Limpia el timer si el componente se desmonta antes de que el timer termine
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className={styles.container}>
            <div className={styles.spinner}>
                <div className={styles.div}>
                    <img src={banner} alt="banner" className={styles.banner} />
                </div>
            </div>
        </div>
    );
};

export default Loading;