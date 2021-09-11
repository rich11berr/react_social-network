import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
    return (
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dialogs">Dialogs</NavLink> 
          </li>
          <li>
            <NavLink to="#s">News</NavLink>
          </li>
          <li>
            <NavLink to="#s">Music</NavLink>
          </li>
        </ul>
    </nav>
    )
}

export default Nav;