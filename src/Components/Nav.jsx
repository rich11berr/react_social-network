import React from 'react';
import styles from './Nav.module.css';

const Nav = () => {
    return (
      <nav className={styles.nav}>
      <ul>
        <li>
          <a href="#s">Profile</a>
        </li>
        <li>
          <a href="#s">Messages</a>
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