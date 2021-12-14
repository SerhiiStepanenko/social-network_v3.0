import React from "react"
// import s from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import ProfileInfoForMe from "./profileInfoForMe/ProfileInfoForMe";

const Profile = () => {
    return (
        <main>
            <ProfileInfoForMe/>
            <MyPosts/>
        </main>
    )
}

export default Profile
