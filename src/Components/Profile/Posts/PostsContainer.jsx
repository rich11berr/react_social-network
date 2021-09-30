import React from "react";
import { connect } from "react-redux";
import {
    addPostActionCreator,
    onPostChangeActionCreator,
} from "../../../redux/profile-reducer";
import Posts from "./Posts";

// const PostsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 };

//                 let onPostChange = (text) => {
//                     let action = onPostChangeActionCreator(text);
//                     store.dispatch(action);
//                 };
//                 let state = store.getState();
//                 return (
//                     <Posts
//                         updateNewPostText={onPostChange}
//                         addPost={addPost}
//                         postsData={state.profilePage.postsData}
//                         newPostText={state.profilePage.newPostText}
//                     />
//                 );
//             }}
//         </StoreContext.Consumer>
//     );
// };

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            let action = onPostChangeActionCreator(text);
            dispatch(action);
        },
    };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
