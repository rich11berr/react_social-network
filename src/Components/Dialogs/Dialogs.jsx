import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const DialogUser = (props) => {
  return (
    <div className={styles.dialog_user}>
      <NavLink to={"/dialogs/" + props.id} activeClassName="active">
        {props.username}
      </NavLink>
    </div>
  );
};

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialog_users}>
        <DialogUser username="username1" id="1" />
        <DialogUser username="username2" id="2" />
        <DialogUser username="username3" id="3" />
        <DialogUser username="username4" id="4" />
        <DialogUser username="username5" id="5" />
      </div>
      <div className={styles.dialog_messages}>
        <div className={styles.dialog_message}>
          <p>Hello world</p>
        </div>
        <div className={styles.dialog_message}>
          <p>Kek</p>
        </div>
        <div className={styles.dialog_message}>
          <p>Lol</p>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
