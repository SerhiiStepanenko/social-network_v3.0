import React from "react"
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.flexBlock}>
                <img alt='icon' src='https://cdnimg.rg.ru/img/content/130/24/16/1_d_850.jpg'/>
                <div><p>{props.post}</p></div>
            </div>
            <span>like {props.likesCount}</span>
        </div>
    )
}

export default Post
