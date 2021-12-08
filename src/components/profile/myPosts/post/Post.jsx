import React from "react"
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.post}>
            <div className={s.flexBlock}>
                <img src='https://cdnimg.rg.ru/img/content/130/24/16/1_d_850.jpg'/>
                <div><p>Post</p></div>
            </div>
        </div>
    )
}

export default Post
