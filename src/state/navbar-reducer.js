let initialState = {
    menuItems: [
        {id: 1, item: 'Profile', to: '/'},
        {id: 2, item: 'Messages', to: '/dialogs'},
        {id: 6, item: 'Users', to: '/users'},
        {id: 3, item: 'News', to: '/news'},
        {id: 4, item: 'Music', to: '/music'},
        {id: 5, item: 'Settings', to: '/settings'},

    ],
    logo: 'Logo'
}

const navbarReducer = (state = initialState, action) => {
    return state
}

export default navbarReducer