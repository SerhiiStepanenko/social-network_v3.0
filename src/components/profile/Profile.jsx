import React from "react"
// import s from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import ProfileInfoForMe from "./profileInfoForMe/ProfileInfoForMe";

const Profile = (props) => {
    return (
        <main>
            <ProfileInfoForMe/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </main>
    )
}

export default Profile
