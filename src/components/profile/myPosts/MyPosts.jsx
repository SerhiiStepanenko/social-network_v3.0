import React from "react"
import s from './MyPosts.module.css'
import Post from "./post/Post"
import {addPostTextAC, updateNewPostTextAC} from "../../../state/profile-reducer";

const MyPosts = (props) => {
    let newPostElement = React.createRef()
    let addPost = () => {
        props.dispatch(addPostTextAC())
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextAC(text))
    }
    return (
        <div>
            <div className={s.container}>
                <div className={s.addPostBlock}>
                    <h4>
                        My posts
                    </h4>
                    <textarea value={props.newPostText}
                              ref={newPostElement}
                              onChange={onPostChange}/>
                    <button className={s.button}
                            onClick={addPost}>
                        Add post
                    </button>
                </div>
                {props.posts.map(post => (
                    <Post post={post.post} likesCount={post.likesCount}/>
                ))}

            </div>
        </div>
    )
}

export default MyPosts
