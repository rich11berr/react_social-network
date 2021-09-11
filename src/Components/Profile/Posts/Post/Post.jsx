import React from "react";
import styles from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={styles.post}>
        <img src="" alt="userpic" />
        <p>{props.username} :</p>
        <p>{props.message}</p>
        <span>{props.like} likes</span>
    </div>
    ) 
}

export default Post;