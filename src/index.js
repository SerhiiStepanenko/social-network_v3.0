import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './state/state'

export let renderTree = (state) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPostText={store.addPostText.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}
                 addMessagesText={store.addMessagesText.bind(store)}
                 updateNewMessageText={store.updateNewMessageText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree(store.getState())

store.subscribe(renderTree)