import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmcYhwCLfI3QTKtveCcdl2VZeG66f6jVUXCg&usqp=CAU"
          alt="logo"
        ></img>
      </header>
    )
}

export default Header;