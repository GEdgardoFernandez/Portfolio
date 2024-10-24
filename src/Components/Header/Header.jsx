import React from 'react';
import Sidebar from '../Menu/Menu';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Guillermo Fernandez
      </h1>
      <Sidebar />
    </header>
  );
};

export default Header;
