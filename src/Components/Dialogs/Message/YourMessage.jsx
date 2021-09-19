import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./../Dialogs.module.css";

const YourMessage = (props) => {
  return (
    <div className={styles.dialog_messageYour}>
      <p>{props.messageText}</p>
    </div>
  );
};

export default YourMessage;
