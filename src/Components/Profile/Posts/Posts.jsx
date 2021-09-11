import React from "react";
import Post from "./Post/Post";
import styles from "./Posts.module.css"


const Posts = () => {
    return (
        <div className={styles.posts}>
            <h2>My posts</h2>
            <form action>
              <textarea
                name
                id
                cols={30}
                rows={10}
                placeholder="your news..."
                defaultValue={"        "}
              />
              <button>send</button>
            </form>
            <Post message='Hi< how ar u?' username="user1" like="3"/>
            <Post message="It's my first post here)" username="user1" like="4"/>
            {/* <Post />
            <Post />
            <Post />
            <Post /> */}
          </div>
    )
}

export default Posts