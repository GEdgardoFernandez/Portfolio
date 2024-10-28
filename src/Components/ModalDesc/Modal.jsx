import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <div className={styles.modalContent}>
          <div className={styles.carousel}>
            {React.Children.map(children, (child, index) =>
            (<div key={index} className={styles.carouselItem}> {child}
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; export default Modal;
