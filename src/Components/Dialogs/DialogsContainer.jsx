import React from "react";
import {
    addMessageActionCreator,
    onMessageChangeActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let onMessageChange = (text) => {
        let action = onMessageChangeActionCreator(text);
        props.store.dispatch(action);
    };
    let addMessage = () => {
        let action = addMessageActionCreator();
        props.store.dispatch(action);
    };

    return (
        <Dialogs
            onMessageChange={onMessageChange}
            addMessage={addMessage}
            dialogsPage={state.dialogsPage}
        />
    );
};

export default DialogsContainer;
