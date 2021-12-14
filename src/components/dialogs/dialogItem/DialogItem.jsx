import React from "react"
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom"

const DialogItem = (props) => {
    return (
        <div className={`${s.dialogItem} ${s.flexBlock}`}>
            <div>
                <NavLink className={s.dialogAva}
                         to='#'>
                    <img alt='ava'
                         src={props.ava}/>
                </NavLink>
            </div>
            <div className={s.dialogNameBlock}>
                <NavLink className={s.dialogName}
                         to={`${'/dialogs/'}${props.id}`}>
                    {props.name}
                </NavLink>
            </div>
        </div>
    )
}

export default DialogItem