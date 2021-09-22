const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
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
            // date: "11:12",
        },
    ],
    newPostText: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                postText: state.newPostText,
                like: 0,
            };
            state.postsData.push(newPost);
            state.newPostText = " ";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return { type: ADD_POST };
};

export const onPostChangeActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default profileReducer;
