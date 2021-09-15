import React from "react";
import Posts from "./Posts/Posts";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo />
      <div className={styles.profile_posts}>
        <Posts postsData={props.state.postsData} addPost={props.addPost} />
      </div>
    </div>
  );
};

export default Profile;
