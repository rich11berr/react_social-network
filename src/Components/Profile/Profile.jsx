import React from "react";
import Posts from "./Posts/Posts";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <ProfileInfo />
      <div className={styles.profile_posts}>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
