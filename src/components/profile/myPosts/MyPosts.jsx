import React from "react"
import s from './MyPosts.module.css'
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div>
            <div className={s.container}>
                <div className={s.addPostBlock}>
                    <h4>
                        My posts
                    </h4>
                    <textarea/>
                    <button className={s.button}>Add post</button>
                </div>
                <Post message='my message' likesCount='25'/>
            </div>
        </div>
    )
}

export default MyPosts
