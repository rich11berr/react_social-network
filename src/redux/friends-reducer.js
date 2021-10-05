const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    usersData: [
        // {
        //     id: 1,
        //     username: "James",
        //     userImg:
        //         "https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        //     shorty: "live is a choice",
        //     location: {
        //         country: "United States",
        //         city: "NY",
        //     },
        //     followStatus: true,
        // },
        // {
        //     id: 2,
        //     username: "Nika",
        //     userImg:
        //         "https://images.unsplash.com/photo-1619694770795-e21c58464159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        //     shorty: "live is a choice",
        //     location: {
        //         country: "United States",
        //         city: "NY",
        //     },
        //     followStatus: true,
        // },
        // {
        //     id: 3,
        //     username: "Mike",
        //     userImg:
        //         "https://images.unsplash.com/photo-1631242918552-292249767127?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        //     shorty: "live is a choice",
        //     location: {
        //         country: "United States",
        //         city: "NY",
        //     },
        //     followStatus: true,
        // },
        // {
        //     id: 4,
        //     username: "Lora",
        //     userImg:
        //         "https://images.unsplash.com/photo-1620167972495-b6b7bdf32c5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        //     shorty: "live is a choice",
        //     location: {
        //         country: "United States",
        //         city: "NY",
        //     },
        //     followStatus: true,
        // },
    ],
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: [...state.usersData].map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followStatus: true };
                    }
                    return u;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                usersData: [...state.usersData].map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followStatus: false };
                    }
                    return u;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                usersData: [...state.usersData, ...action.usersData],
            };
        default:
            return state;
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (usersData) => ({ type: SET_USERS, usersData });

export default friendsReducer;
