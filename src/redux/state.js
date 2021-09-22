let store = {
    _state: {
        profilePage: {
            postsData: [
                {
                    id: 1,
                    postText: "It's my first post here)",
                    like: 3,
                    // date: "11:11",
                },
                {
                    id: 2,
                    postText: "This is easier then I thought ",
                    like: "4",
                    date: "11:12",
                },
            ],
            newPostText: "",
        },
        dialogsPage: {
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
        },
    },
    getState() {
        return this._state;
    },
    callSubscriber() {
        console.log("State was changed");
    },
    addPost() {
        let newPost = {
            id: 5,
            postText: this._state.profilePage.newPostText,
            like: 0,
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = " ";
        this.callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this.callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 2,
            messageText: this._state.dialogsPage.newMessageText,
            date: "11:14",
        };
        this._state.dialogsPage.messagesData.yourMessagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = " ";
        this.callSubscriber(this._state);
    },
    updateMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this.callSubscriber(this._state);
    },
    subscribe(observer) {
        this.callSubscriber = observer;
    },
};

window.store = store;
export default store;
