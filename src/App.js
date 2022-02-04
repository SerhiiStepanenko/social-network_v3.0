// import s from './App.module.css'
import React from "react"
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import Profile from "./components/profile/Profile"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from "./components/dialogs/DialogsContainer";

const App = (props) => {
    debugger
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Navbar navBar={props.state.navBar}/>
                <Routes>
                    <Route path='/dialogs/*' element={
                        <DialogsContainer store={props.store}/>}/>
                    <Route path='/' element={
                        <Profile store={props.store}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </BrowserRouter>
        </div>


    );
}

export default App
