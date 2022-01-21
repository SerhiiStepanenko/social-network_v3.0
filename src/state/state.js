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
    addPostText() {
        let newPost = {
            id: 2,
            post: this._state.profilePage.newPostText ,
            likesCount: 0
        }
        this._state.profilePage.posts.unshift(newPost)
        this._state.profilePage.newPostText = ''
        this._renderTree(this._state)
    },
    updateNewPostText(text) {
        this._state.profilePage.newPostText = text
        this._renderTree(this._state)
    },
    addMessagesText() {
        let newMessage = {
            id: 3,
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.message.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._renderTree(this._state)
    },
    updateNewMessageText(text) {
        this._state.dialogsPage.newMessageText = text
        this._renderTree(this._state)
    },
    subscribe(observer) {
        this._renderTree = observer
    }
}

export default store

