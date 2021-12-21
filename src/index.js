import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./state/state";
import {addPostText} from './state/state'


export let renderTree = () =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPostText={addPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree()