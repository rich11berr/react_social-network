import React from "react";
import styles from "./Friends.module.css";

let Friends = (props) => {
    if (props.usersData.length === 0) {
        props.setUsers([
            {
                id: 1,
                username: "James",
                userImg:
                    "https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                shorty: "Whiskey is a great start",
                location: {
                    country: "United States",
                    city: "NY",
                },
                followStatus: true,
            },
            {
                id: 2,
                username: "Nika",
                userImg:
                    "https://images.unsplash.com/photo-1619694770795-e21c58464159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                shorty: "Don't let down friends and prod)",
                location: {
                    country: "United Kingdom",
                    city: "Liverpool",
                },
                followStatus: true,
            },
            {
                id: 3,
                username: "Mike",
                userImg:
                    "https://images.unsplash.com/photo-1631242918552-292249767127?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
                shorty: "PR new emotions to my life",
                location: {
                    country: "German",
                    city: "Berlin",
                },
                followStatus: true,
            },
            {
                id: 4,
                username: "Lora",
                userImg:
                    "https://images.unsplash.com/photo-1620167972495-b6b7bdf32c5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                shorty: "Vodka-matryoshka developer",
                location: {
                    country: "Russia",
                    city: "Vladivostok",
                },
                followStatus: true,
            },
        ]);
    }

    return (
        <div className={styles.friendsWrap}>
            {props.usersData.map((u) => (
                <div key={u.id} className={styles.userWrap}>
                    <div className={styles.userSide}>
                        <div className={styles.userSide_img}>
                            <img
                                src={u.userImg}
                                alt="userpic"
                                width="100px"
                                height="auto"
                            />
                        </div>
                        {u.followStatus ? (
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
                        <p className={styles.userData_username}>{u.username}</p>
                        <p className={styles.userData_shorty}>{u.shorty}</p>
                        <p className={styles.userData_country}>
                            {u.location.country}
                        </p>
                        <p className={styles.userData_city}>
                            {u.location.city}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Friends;
