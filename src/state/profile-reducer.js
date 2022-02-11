const ADD_POST_TEXT = 'ADD-POST-TEXT'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: '01', post: 'Hi', likesCount: '12'},
        {id: '02', post: 'How are you?', likesCount: '8'}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_TEXT: {
            let newPost = {
                id: 2,
                post: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.unshift(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state}
            stateCopy.newPostText = action.post
            return stateCopy
        }
        default:
            return state

    }
}

export let addPostTextAC = () => {
    return {
        type: ADD_POST_TEXT
    }
}
export let updateNewPostTextAC = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        post: text
    }
}

export default profileReducer
