import React from "react";
import Friends from "./Friends";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/friends-reducer";

let MapStateToProps = (state) => {
    return {
        users: state.friendsPage.users,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
    };
};

export default connect(MapStateToProps, mapDispatchToProps)(Friends);
