import {addMessagesTextAC, updateNewMessageTextAC} from "../../state/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//     let onAddMessage = () => {
//         props.store.dispatch(addMessagesTextAC())
//     }
//     let updateNewMessageText = (text) => {
//         props.store.dispatch(updateNewMessageTextAC(text))
//     }
//     return (
//         <Dialogs updateNewMessage={updateNewMessageText}
//                  onAddMessage={onAddMessage}
//                  dialogsPage={props.store.getState().dialogsPage}/>
//     )
// }

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: ()=>{
            dispatch(addMessagesTextAC())
        },
        updateNewMessage: (text)=>{
            dispatch(updateNewMessageTextAC(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer

