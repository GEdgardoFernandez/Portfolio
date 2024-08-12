import React from 'react';
import style from './NeonSign.module.css';

const NeonSign = ({ text, isActive }) => {
    return (
        <div className={`${style.neonSign} ${isActive ? style.active : ''}`}>
            {text}
        </div>
    );
};

export default NeonSign;