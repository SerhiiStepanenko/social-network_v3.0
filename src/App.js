// import s from './App.module.css'
import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";

const App = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App
