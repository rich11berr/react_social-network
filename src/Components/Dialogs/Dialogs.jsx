import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";
import DialogUser from "./DialogUser/DialogUser";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let userItem = props.state.userData.map((user) => (
    <DialogUser username={user.name} id={user.id} userImg={user.userImg} />
  ));

  let messageItem = props.state.messagesData.map((message) => (
    <Message messageText={message.messageText} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialog_users}>{userItem}</div>
      <div className={styles.dialog_messages}>
        {messageItem}
        <div className={styles.dialog_messagesInput}>
          <input
            type="text"
            placeholder="Type a message here"
            ref={newMessageElement}
          />
          <button>send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
