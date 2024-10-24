import { useState } from 'react';
import styles from './Menu.module.css';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <div className={styles.container}>
      <button onClick={() => setOpen(!open)} className={styles.btn}> <span className={styles.icon}>
        <svg viewBox="0 0 175 80" width="40" height="40">
            <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
        </svg>
    </span>
    <span className={styles.text}>MENU</span></button>
      <div className={`${styles.sidebar} ${open ? styles.sidebarOpen : ''}`}>
        {location.pathname === '/about' && (
               <a href="/home">Home</a>
        )}
   
        
        {location.pathname !== '/about' && (
          <>
            <a href="/about">About</a>
            <a href="#Projects">Projects</a>
            <a href="#Skills">Skills</a>
          </>
        )}
        <a href="mailto:gecozzi87@gmail.com">Contact</a>
      </div>
    </div>
  );
};

export default Sidebar;