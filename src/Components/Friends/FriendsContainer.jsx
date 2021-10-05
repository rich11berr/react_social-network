import React from "react";
import Friends from "./Friends";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/friends-reducer";

let MapStateToProps = (state) => {
    return {
        usersData: state.friendsPage.usersData,
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
        setUsers: (usersData) => {
            dispatch(setUsersAC(usersData));
        },
    };
};

export default connect(MapStateToProps, mapDispatchToProps)(Friends);
