import React from "react"
import ProfileInfoForMe from "./profileInfoForMe/ProfileInfoForMe";
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <main>
            <ProfileInfoForMe/>
            <MyPostsContainer store={props.store}/>
        </main>
    )
}

export default Profile
