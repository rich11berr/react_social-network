import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

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

const Message = (props) => {
  return (
    <div className={styles.dialog_message}>
      <p>{props.messageText}</p>
    </div>
  );
};

const Dialogs = (props) => {
  let userItem = userData.map((user) => (
    <DialogUser username={user.name} id={user.id} userImg={user.userImg} />
  ));

  let messageItem = messagesData.map((message) => (
    <Message messageText={message.messageText} />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialog_users}>{userItem}</div>
      <div className={styles.dialog_messages}>{messageItem}</div>
    </div>
  );
};

let userData = [
  {
    id: 1,
    name: "James",
    userImg:
      "https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Nika",
    userImg:
      "https://images.unsplash.com/photo-1619694770795-e21c58464159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: 3,
    name: "Mike",
    userImg:
      "https://images.unsplash.com/photo-1631242918552-292249767127?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "Lora",
    userImg:
      "https://images.unsplash.com/photo-1620167972495-b6b7bdf32c5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
];

let messagesData = [
  { id: 1, messageText: "Yo", date: "11:11" },
  { id: 2, messageText: "Do this shit faster", date: "11:12" },
  { id: 3, messageText: "U can do it!", date: "11:13" },
];

export default Dialogs;
