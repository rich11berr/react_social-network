import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <img src="" alt="userpic" />
      <div className={styles.post_mainText}>
        <p>{props.message}</p>
      </div>
      <span>
        {props.like}
        <img src="" alt="heart" />
      </span>
    </div>
  );
};

export default Post;
