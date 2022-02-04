import React from "react"
import s from './MyPosts.module.css'
import Post from "./post/Post"

const MyPosts = (props) => {
    let addPost = () => {
        props.onAddPost()
    }
    let onPostChange = (e) =>{
        let text = e.target.value
        props.updateNewPost(text)
    }
    return (
        <div>
            <div className={s.container}>
                <div className={s.addPostBlock}>
                    <h4>
                        My posts
                    </h4>
                    <textarea value={props.newPostText}
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
