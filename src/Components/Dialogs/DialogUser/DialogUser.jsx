import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./../Dialogs.module.css";

const DialogUser = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={styles.dialog_user}>
      <div className={styles.dialog_userImg}>
        <img src={[props.userImg]} alt="dialog_userImg" />
      </div>
      <div className={styles.dialog_userText}>
        <NavLink to={path} activeClassName="active">
          {props.username}
        </NavLink>
      </div>
    </div>
  );
};

export default DialogUser;
