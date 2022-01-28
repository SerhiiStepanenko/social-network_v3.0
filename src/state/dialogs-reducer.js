const ADD_MESSAGES_TEXT = 'ADD-MESSAGES-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const dialogsReducer = (state, action) =>{
        switch(action.type){
            case ADD_MESSAGES_TEXT:
                let newMessage = {
                    id: 3,
                    message: state.newMessageText,
                }
                state.message.push(newMessage)
                state.newMessageText = ''
                return state
            case UPDATE_NEW_MESSAGE_TEXT:
                state.newMessageText = action.message
                return state
            default:
                return state
        }
}

export let addMessagesTextAC = () =>{
    return{
        type: ADD_MESSAGES_TEXT
    }
}
export let updateNewMessageTextAC = (text) =>{
    return{
        type:UPDATE_NEW_MESSAGE_TEXT,
        message: text
    }
}

export default dialogsReducer