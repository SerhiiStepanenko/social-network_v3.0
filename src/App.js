// import s from './App.module.css'
import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";

const App = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Dialogs/>
            {/*<Profile/>*/}
        </div>
    );
}

export default App
