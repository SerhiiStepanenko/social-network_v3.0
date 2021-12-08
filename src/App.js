import './App.css';
import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";

const App = () => {
    return (
        <div className='app'>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App
