import React from "react"
import ProfileInfoForMe from "./profileInfoForMe/ProfileInfoForMe";
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <main>
            <ProfileInfoForMe/>
            <MyPostsContainer/>
        </main>
    )
}

export default Profile
