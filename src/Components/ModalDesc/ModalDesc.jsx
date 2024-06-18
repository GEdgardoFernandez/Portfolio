import style from "./ModalDesc.module.css";


const ModalDesc = ({show, closed}) => {
    if (!show) {
        return null; // No mostrar el modal si show es false
    }
    return (
        <div className={style.container}>
            <div className={style.modalContent}>
                <p>
                </p>
            </div>
            <button onClick={closed} className={style.closeButton}>X</button>
        </div>
    );
};  

export default ModalDesc;