import styles from "./FormContact.module.css";
import { useState } from "react";

const FormContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, email, message };
        console.log(data);
    };
    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea placeholder="Escribe tu mensaje" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default FormContact;