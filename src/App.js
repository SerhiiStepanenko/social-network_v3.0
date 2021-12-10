import s from './App.module.css'
import React from "react"
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import Profile from "./components/profile/Profile"
import Dialogs from "./components/dialogs/Dialogs"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Navbar/>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs/>}/>
                    <Route path='/' exact  element={<Profile/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </BrowserRouter>
        </div>


    );
}

export default App
