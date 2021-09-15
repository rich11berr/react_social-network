import React from "react";
import Post from "./Post/Post";
import styles from "./Posts.module.css";

let postsData = [
  {
    id: 1,
    postText: "This is easier then I thought",
    like: "3",
    date: "11:11",
  },
  { id: 2, postText: "It's my first post here)", like: "4", date: "11:12" },
];

const Posts = () => {
  return (
    <div className={styles.posts}>
      <h2>My posts</h2>
      <div className={styles.posts_form}>
        <input placeholder="Type here..." />
        <button>send</button>
      </div>
      <Post message={postsData[0].postText} like={postsData[0].like} />
      <Post message={postsData[1].postText} like={postsData[1].like} />
    </div>
  );
};

export default Posts;
