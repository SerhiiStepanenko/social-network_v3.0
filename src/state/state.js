const ADD_POST_TEXT = 'ADD-POST-TEXT'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGES_TEXT = 'ADD-MESSAGES-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {
    _state: {
        dialogsPage: {
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
        },
        navBar: {
            menuItems: [
                {id: 1, item: 'Profile', to: '/'},
                {id: 2, item: 'Messages', to: '/dialogs'},
                {id: 3, item: 'News', to: '/news'},
                {id: 4, item: 'Music', to: '/music'},
                {id: 5, item: 'Settings', to: '/settings'},
            ],
            logo: 'Logo'
        },
        profilePage: {
            posts: [
                {id: '01', post: 'Hi', likesCount: '12'},
                {id: '02', post: 'How are you?', likesCount: '8'}
            ],
            newPostText: ''
        }
    },
    getState() {
        return this._state
    },
    _renderTree() {},
    subscribe(observer) {
        this._renderTree = observer
    },

    _addPostText() {
        let newPost = {
            id: 2,
            post: this._state.profilePage.newPostText ,
            likesCount: 0
        }
        this._state.profilePage.posts.unshift(newPost)
        this._state.profilePage.newPostText = ''
        this._renderTree(this._state)
    },
    _updateNewPostText(text) {
        this._state.profilePage.newPostText = text
        this._renderTree(this._state)
    },

    _addMessagesText() {
        let newMessage = {
            id: 3,
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.message.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._renderTree(this._state)
    },
    _updateNewMessageText(text) {
        this._state.dialogsPage.newMessageText = text
        this._renderTree(this._state)
    },


    dispatch(action){
        if(action.type === ADD_POST_TEXT){
            this._addPostText()
        }else if (action.type === UPDATE_NEW_POST_TEXT){
            this._updateNewPostText(action.post)
        }else if (action.type === ADD_MESSAGES_TEXT){
            this._addMessagesText()
        }else if(action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._updateNewMessageText(action.message)
        }
    }
}

export let addPostTextAC = () =>{
    return{
        type: ADD_POST_TEXT
    }
}
export let updateNewPostTextAC = (text) =>{
    return{
        type:UPDATE_NEW_POST_TEXT,
        post: text
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
export default store

