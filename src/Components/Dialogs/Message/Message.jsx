import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./../Dialogs.module.css";

const Message = (props) => {
  return (
    <div className={styles.dialog_message}>
      <p>{props.messageText}</p>
    </div>
  );
};

export default Message;
