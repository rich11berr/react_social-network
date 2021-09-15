import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";
import DialogUser from "./DialogUser/DialogUser";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let userItem = props.userData.map((user) => (
    <DialogUser username={user.name} id={user.id} userImg={user.userImg} />
  ));

  let messageItem = props.messagesData.map((message) => (
    <Message messageText={message.messageText} />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialog_users}>{userItem}</div>
      <div className={styles.dialog_messages}>{messageItem}</div>
    </div>
  );
};

export default Dialogs;
