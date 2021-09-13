import React from "react";
import Post from "./Post/Post";
import styles from "./Posts.module.css";

const Posts = () => {
  return (
    <div className={styles.posts}>
      <h2>My posts</h2>
      <div className={styles.posts_form}>
        <input placeholder="Type here..." />
        <button>send</button>
      </div>
      <Post message="This is easier then I thought" like="3" />
      <Post message="It's my first post here)" like="4" />
      {/* <Post />
            <Post />
            <Post />
            <Post /> */}
    </div>
  );
};

export default Posts;
