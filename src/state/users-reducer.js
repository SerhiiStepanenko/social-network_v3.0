const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.id === u.id) {
                        return {...u, following: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.id === u.id) {
                        return {...u, following: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        default:
            return state
    }
}

export let followAC = (userId) => {
    return {
        type: FOLLOW,
        id: userId
    }
}
export let unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        id: userId
    }
}

export let setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export default usersReducer