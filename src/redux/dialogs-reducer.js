const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 2,
                messageText: state.newMessageText,
                //date: "11:14",
            };
            state.messagesData.yourMessagesData.push(newMessage);
            state.newMessageText = " ";
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
    return state;
};

export const addMessageActionCreator = () => {
    return { type: ADD_MESSAGE };
};

export const onMessageChangeActionCreator = (text) => {
    return { type: UPDATE_MESSAGE_TEXT, newText: text };
};

export default dialogsReducer;
