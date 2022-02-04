import React from "react"
import {addPostTextAC, updateNewPostTextAC} from "../../../state/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let onAddPost = () => {
        props.store.dispatch(addPostTextAC())
    }
    let updateNewPostText = (text) =>{
        props.store.dispatch(updateNewPostTextAC(text))
    }
    return (
        <MyPosts updateNewPost={updateNewPostText}
                 onAddPost={onAddPost}
                 newPostText={props.store.getState().profilePage.newPostText}
                 posts={props.store.getState().profilePage.posts}/>
    )
}

export default MyPostsContainer
