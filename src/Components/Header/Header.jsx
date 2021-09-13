import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#">
        <h1>R-social</h1>
      </a>
    </header>
  );
};

export default Header;
