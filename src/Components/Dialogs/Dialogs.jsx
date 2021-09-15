import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const DialogUser = (props) => {
  return (
    <div className={styles.dialog_user}>
      <div className={styles.dialog_userImg}>
        <img src={[props.userImg]} alt="dialog_userImg" />
      </div>
      <div className={styles.dialog_userText}>
        <NavLink to={"/dialogs/" + props.id} activeClassName="active">
          {props.username}
        </NavLink>
      </div>
    </div>
  );
};

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialog_users}>
        <DialogUser
          username="username1"
          id="1"
          userImg="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        />
        <DialogUser
          username="username2"
          id="2"
          userImg="https://images.unsplash.com/photo-1619694770795-e21c58464159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        />
        <DialogUser
          username="username3"
          id="3"
          userImg="https://images.unsplash.com/photo-1631242918552-292249767127?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
        />
        <DialogUser
          username="username4"
          id="4"
          userImg="https://images.unsplash.com/photo-1620167972495-b6b7bdf32c5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        />
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
