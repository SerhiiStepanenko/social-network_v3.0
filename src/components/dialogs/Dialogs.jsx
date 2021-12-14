import React from "react"
import s from './Dialogs.module.css'
import {dialogsFile} from './serverFile'
import DialogItem from "./dialogItem/DialogItem";

const Dialogs = () => {
    return (
        <div className={s.container}>
            <div className={s.flexBlock}>
                <div className={s.messages}>
                    <div>
                        message
                    </div>
                </div>
                <div className={s.dialogs}>
                    {dialogsFile.users.map(user => (
                        <DialogItem key={user.id}
                                    ava={user.ava}
                                    id={user.id}
                                    name={user.name}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dialogs