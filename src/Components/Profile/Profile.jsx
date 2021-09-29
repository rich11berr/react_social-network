import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <ProfileInfo />
            <div className={styles.profile_posts}>
                <PostsContainer store={props.store} />
            </div>
        </div>
    );
};

export default Profile;
