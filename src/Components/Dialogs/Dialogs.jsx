import React from "react";
import { NavLink } from "react-router-dom";
import {
    addMessageActionCreator,
    onMessageChangeActionCreator,
} from "../../redux/state";
import styles from "./Dialogs.module.css";
import DialogUser from "./DialogUser/DialogUser";
import IncomeMessage from "./Message/IncomeMessage";
import YourMessage from "./Message/YourMessage";

const Dialogs = (props) => {
    let userItem = props.state.userData.map((user) => (
        <DialogUser username={user.name} id={user.id} userImg={user.userImg} />
    ));

    // let messageIncomeItem = props.state.messagesData.incomeMessagesData.map(
    //   (message) => <IncomeMessage messageText={message.messageText} />
    // );

    // let messageYourItem = props.state.messagesData.yourMessagesData.map(
    //   (message) => <YourMessage messageText={message.messageText} />
    // );

    let messageItem = () => {
        let messageIncomeItem = props.state.messagesData.incomeMessagesData.map(
            (message) => <IncomeMessage messageText={message.messageText} />
        );

        let messageYourItem = props.state.messagesData.yourMessagesData.map(
            (message) => <YourMessage messageText={message.messageText} />
        );
        return [messageIncomeItem, messageYourItem];
    };

    let newMessageElement = React.createRef();

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(onMessageChangeActionCreator(text));
    };
    let addMessage = () => {
        if (newMessageElement.current.value == 0) {
            return 0;
        } else {
            props.dispatch(addMessageActionCreator());
        }
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialog_users}>{userItem}</div>
            <div className={styles.dialog_messages}>
                <div className={styles.dialog_messagesWrapper}>
                    {messageItem()}
                </div>
                <div className={styles.dialog_messagesInput}>
                    <input
                        type="text"
                        placeholder="Type a message here"
                        ref={newMessageElement}
                        onChange={onMessageChange}
                        value={props.state.newMessageText}
                    />
                    <button onClick={addMessage}>send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
