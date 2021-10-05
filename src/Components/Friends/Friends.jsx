import React from "react";

let Friends = (props) => {
    if (props.usersData.length === 0) {
        props.setUsers([
            {
                id: 1,
                username: "James",
                userImg:
                    "https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                shorty: "live is a choice",
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
                shorty: "live is a choice",
                location: {
                    country: "United States",
                    city: "NY",
                },
                followStatus: true,
            },
            {
                id: 3,
                username: "Mike",
                userImg:
                    "https://images.unsplash.com/photo-1631242918552-292249767127?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
                shorty: "live is a choice",
                location: {
                    country: "United States",
                    city: "NY",
                },
                followStatus: true,
            },
            {
                id: 4,
                username: "Lora",
                userImg:
                    "https://images.unsplash.com/photo-1620167972495-b6b7bdf32c5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                shorty: "live is a choice",
                location: {
                    country: "United States",
                    city: "NY",
                },
                followStatus: true,
            },
        ]);
    }

    return (
        <div>
            {props.usersData.map((u) => (
                <div key={u.id} className="userWrap">
                    <div className="userSide">
                        <img src={u.userImg} alt="userpic" />
                        {u.followStatus ? (
                            <button
                                onClick={() => {
                                    props.unfollow(u.id);
                                }}
                            >
                                Unfollow
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    props.follow(u.id);
                                }}
                            >
                                Follow
                            </button>
                        )}
                    </div>
                    <div className="userData">
                        <p className="username">{u.username}</p>
                        <p className="shorty">{u.shorty}</p>
                        <p className="country">{u.location.country}</p>
                        <p className="city">{u.location.city}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Friends;
