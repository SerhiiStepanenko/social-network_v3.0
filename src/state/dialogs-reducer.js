const ADD_MESSAGES_TEXT = 'ADD-MESSAGES-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogsItem: [
        {
            id: '01',
            name: 'Brad Pit',
            ava: 'https://cdn.britannica.com/w:400,h:300,c:crop/61/137461-050-BB6C5D80/Brad-Pitt-2008.jpg',
        },
        {
            id: '02',
            name: 'Dwayne Johnson',
            ava: 'https://i.imgur.com/EBKeOQb.jpg',
        },
        {
            id: '03',
            name: 'Anna Paquin',
            ava: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2015%2F08%2Fx-men-rogue_0_0_0.jpg&q=85',
        },
        {
            id: '04',
            name: 'Kate Hudson',
            ava: 'https://www.kino-teatr.ru/acter/photo/1/0/59301/44655.jpg',
        },
    ],
    message: [
        {
            id: '01',
            message: 'Hi',
        },
        {
            id: '02',
            message: 'How are you?',
        },
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGES_TEXT:
            let newMessage = {
                id: 3,
                message: state.newMessageText,
            }
            return{
                ...state,
                message: [...state.message, newMessage],
                newMessageText: ''
            }
        case UPDATE_NEW_MESSAGE_TEXT:{
            return {
                ...state,
                newMessageText: action.message
            }
        }
        default:
            return state
    }
}

export let addMessagesTextAC = () => {
    return {
        type: ADD_MESSAGES_TEXT
    }
}
export let updateNewMessageTextAC = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        message: text
    }
}

export default dialogsReducer