import React from "react";
import {
    addPostActionCreator,
    onPostChangeActionCreator,
} from "../../../redux/profile-reducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        let action = onPostChangeActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <Posts
            updateNewPostText={onPostChange}
            addPost={addPost}
            postsData={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}
        />
    );
};

export default PostsContainer;
