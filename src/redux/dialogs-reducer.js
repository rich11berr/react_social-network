const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let initialState = {
    messagesData: {
        incomeMessagesData: [
            { id: 1, messageText: "Yo", date: "11:11" },
            {
                id: 2,
                messageText: "Do this shit faster",
                date: "11:12",
            },
            { id: 3, messageText: "U can do it!", date: "11:13" },
        ],
        yourMessagesData: [{ id: 1, messageText: "Yo", date: "11:14" }],
    },
    userData: [
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
    ],
    newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 2,
                messageText: state.newMessageText,
                //date: "11:14",
            };
            let stateCopy = { ...state };
            stateCopy.messagesData.yourMessagesData = [
                ...state.messagesData.yourMessagesData,
            ];
            stateCopy.messagesData.yourMessagesData.push(newMessage);
            stateCopy.newMessageText = " ";
            return stateCopy;
        }
        case UPDATE_MESSAGE_TEXT: {
            let stateCopy = { ...state };
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
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
