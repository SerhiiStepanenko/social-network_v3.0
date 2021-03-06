import React from "react"
import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {
    let addMessage = () => {
        props.onAddMessage()
    }
    let onMessageChange = (e) => {
        let text = e.target.value
        props.updateNewMessage(text)
    }
    return (
        <div className={s.container}>
            <div className={s.flexBlock}>
                <div className={s.messages}>
                    {props.dialogsPage.message.map(message => (
                        <Message message={message.message}/>
                    ))}
                    <div>
                        <textarea onChange={onMessageChange}
                                  value={props.dialogsPage.newMessageText}/>
                        <button className={s.button}
                                onClick={addMessage}>
                            Add post
                        </button>
                    </div>
                </div>
                <div className={s.dialogs}>
                    {props.dialogsPage.dialogsItem.map(user => (
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