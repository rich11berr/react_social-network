import * as axios from "axios";
import React from "react";
import styles from "./Friends.module.css";
import userImg from "../../assets/img/default_user.jpg";

let Friends = (props) => {
    if (props.users.length === 0) {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response) => {
                props.setUsers(response.data.items);
            });
    }

    return (
        <div className={styles.friendsWrap}>
            {props.users.map((u) => (
                <div className={styles.userWrap}>
                    <div className={styles.userSide}>
                        <div className={styles.userSide_img}>
                            <img
                                src={
                                    u.photos.small != null
                                        ? u.photos.small
                                        : userImg
                                }
                                alt="userpic"
                                width="100px"
                                height="auto"
                            />
                        </div>
                        {u.followed ? (
                            <button
                                className={styles.userSide_unfollow}
                                onClick={() => {
                                    props.unfollow(u.id);
                                }}
                            >
                                Unfollow
                            </button>
                        ) : (
                            <button
                                className={styles.userSide_follow}
                                onClick={() => {
                                    props.follow(u.id);
                                }}
                            >
                                Follow
                            </button>
                        )}
                    </div>
                    <div className={styles.userData}>
                        <p className={styles.userData_username}>{u.name}</p>
                        <p className={styles.userData_shorty}>{u.status}</p>
                        <p className={styles.userData_country}>
                            {/* {u.location.country} */}
                        </p>
                        <p className={styles.userData_city}>
                            {/* {u.location.city} */}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Friends;
