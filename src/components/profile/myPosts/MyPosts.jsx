import React from "react"
import s from './MyPosts.module.css'
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div className='mainPosts'>
            <div className={s.container}>
                <div>
                    My posts
                </div>
                <textarea/>
                <button>Add post</button>
                <Post message='my message' likesCount='25'/>
            </div>
        </div>
    )
}

export default MyPosts
