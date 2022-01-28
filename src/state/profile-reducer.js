const ADD_POST_TEXT = 'ADD-POST-TEXT'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) =>{
    switch(action.type){
        case ADD_POST_TEXT:
            let newPost = {
                id: 2,
                post: state.newPostText ,
                likesCount: 0
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.post
            return state
        default:
            return state
    }
}

export let addPostTextAC = () =>{
    return{
        type: ADD_POST_TEXT
    }
}
export let updateNewPostTextAC = (text) =>{
    return{
        type:UPDATE_NEW_POST_TEXT,
        post: text
    }
}

export default profileReducer
