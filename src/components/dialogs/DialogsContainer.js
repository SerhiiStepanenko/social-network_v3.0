import React from "react"
import {addMessagesTextAC, updateNewMessageTextAC} from "../../state/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let onAddMessage = () =>{
        props.store.dispatch(addMessagesTextAC())
    }
    let updateNewMessageText = (text) => {
        props.store.dispatch(updateNewMessageTextAC(text))
    }
    return (
        <Dialogs updateNewMessage={updateNewMessageText}
                 onAddMessage={onAddMessage}
                 dialogsPage={props.store.getState().dialogsPage}/>
    )
}

export default DialogsContainer