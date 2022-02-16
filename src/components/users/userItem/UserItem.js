import React from "react";
import s from './UserItem.module.css'

const UserItem = (props) => {
    return (
        <div className={s.userBlock}>
            <div className={s.userItem}>
                <img alt='logo'
                     src={props.ava}/>
                <div>
                    <div className={s.flexColumn}>
                        <p>{props.name}</p>
                        <p>{props.status}</p>
                    </div>
                </div>
                <div>
                    <div className={s.flexColumn}>
                        <p>{props.country}</p>
                        <p>{props.city}</p>
                    </div>
                </div>
            </div>
            <div className={s.userButtonBlock}>
                {props.following
                    ? <button onClick={() => {
                        props.unfollow(props.id)
                    }} className={s.userButton}>follow</button>
                    : <button onClick={() => {
                        props.follow(props.id)
                    }} className={s.userButton}>unfollow</button>
                }
            </div>
        </div>

    )
}

export default UserItem