import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './state/state'

export let renderTree = (state) =>{
    ReactDOM.render (
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree(store.getState())

store.subscribe(renderTree)