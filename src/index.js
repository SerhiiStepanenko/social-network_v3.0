import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessagesText, state, updateNewMessageText, updateNewPostText} from "./state/state";
import {addPostText} from './state/state'


export let renderTree = () =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPostText={addPostText}
                 updateNewPostText={updateNewPostText}
                 addMessagesText={addMessagesText}
                 updateNewMessageText={updateNewMessageText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree()