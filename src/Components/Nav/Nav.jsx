import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.active}>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs">Dialogs</NavLink>
                </li>
                <li>
                    <NavLink to="/friends">Friends</NavLink>
                </li>
                {/* <li>
          <NavLink to="#s">News</NavLink>
        </li> */}
            </ul>
        </nav>
    );
};

export default Nav;
