import React from 'react';
import styles from './Nav.module.css';

const Nav = () => {
    return (
      <nav className={styles.nav}>
      <ul>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/dialogs">Dialogs</a>
        </li>
        <li>
          <a href="#s">News</a>
        </li>
        <li>
          <a href="#s">Music</a>
        </li>
      </ul>
    </nav>
    )
}

export default Nav;