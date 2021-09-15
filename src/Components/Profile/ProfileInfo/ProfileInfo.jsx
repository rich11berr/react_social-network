import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={styles.profile_info}>
      <div className={styles.profile_img}>
        <img
          src="https://sun9-84.userapi.com/impf/c844417/v844417365/10a166/O0HcrIZODQE.jpg?size=2560x1707&quality=96&sign=7aed05caaed0498aa341ff5548c8631f&type=album"
          alt="profile_img"
        />
      </div>
      <div className={styles.profile_text}>
        <p> Rinat Yagudin</p>
        <p>Junior front-end developer</p>
        <p>Date of birth: 11.12.2000</p>
        <p>Current city: Saratov</p>
        <p>Company: none</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
