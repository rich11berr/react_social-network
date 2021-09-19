import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./../Dialogs.module.css";

const IncomeMessage = (props) => {
  return (
    <div className={styles.dialog_messageIncome}>
      <p>{props.messageText}</p>
    </div>
  );
};

export default IncomeMessage;
