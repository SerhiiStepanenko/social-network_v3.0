import React from "react"
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom"

const DialogItem = (props) => {
    return (
        <div className={s.dialogItem}>
            <div className={s.dialogNameBlock}>
                <NavLink className={s.dialogName}
                         to={`${'/dialogs/'}${props.id}`}>
                    <img alt='ava'
                         src={props.ava}/>
                    {props.name}
                </NavLink>
            </div>
        </div>
    )
}

export default DialogItem