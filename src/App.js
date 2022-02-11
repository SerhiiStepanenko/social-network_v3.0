// import s from './App.module.css'
import React from "react"
import Header from "./components/header/Header"
import Profile from "./components/profile/Profile"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import NavbarContainer from "./components/navbar/NavbarContainer";

const App = (props) => {
    debugger
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <NavbarContainer/>
                <Routes>
                    <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                    <Route path='/' element={<Profile/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </BrowserRouter>
        </div>


    );
}

export default App
