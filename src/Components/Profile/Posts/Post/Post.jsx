import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.post_mainText}>
                <p>{props.message}</p>
            </div>
            <button>
                {props.like}
                <img src="" alt="heart" />
            </button>
        </div>
    );
};

export default Post;
