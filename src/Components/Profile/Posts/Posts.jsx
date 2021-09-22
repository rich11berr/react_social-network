import React from "react";
import Post from "./Post/Post";
import styles from "./Posts.module.css";

const Posts = (props) => {
    let postsItem = props.postsData.map((post) => (
        <Post message={post.postText} like={post.like} />
    ));

    let newPostElement = React.createRef();

    let addPost = () => {
        if (newPostElement.current.value == 0) {
            return 0;
        } else {
            props.addPost();
        }
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={styles.posts}>
            <h2>My posts</h2>
            <div className={styles.posts_form}>
                <input
                    onChange={onPostChange}
                    placeholder="Type here..."
                    ref={newPostElement}
                    value={props.newPostText}
                />
                <button onClick={addPost}>send</button>
            </div>
            {postsItem}
        </div>
    );
};

export default Posts;
