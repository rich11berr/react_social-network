import React from "react";
import Post from "./Post/Post";
import styles from "./Posts.module.css";

const Posts = (props) => {
  let postsItem = props.postsData.map((post) => (
    <Post message={post.postText} like={post.like} />
  ));

  return (
    <div className={styles.posts}>
      <h2>My posts</h2>
      <div className={styles.posts_form}>
        <input placeholder="Type here..." />
        <button>send</button>
      </div>
      {postsItem}
    </div>
  );
};

export default Posts;
