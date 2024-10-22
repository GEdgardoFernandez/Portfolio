import { useState } from 'react';
import styles from './Menu.module.css';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)} className={styles.button}>☰</button>
      <div className={`${styles.sidebar} ${open ? styles.sidebarOpen : ''}`}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="mailto:gecozzi87@gmail.com">Contact</a>
      </div>
    </div>
  );
};

export default Sidebar;