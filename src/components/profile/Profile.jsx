import React from "react"

const Profile = () => {
    return (
        <main>
            <div className='mainDescription'>
                <div className='container'>
                    <div className='flexBlockSpaceBetween'>
                        <div className='ava'>
                            <img
                                src='https://showmania.novy.tv/wp-content/uploads/sites/529/2019/01/GettyImages-1089877744.jpg'/>
                        </div>
                        <div className='description'>
                            description
                        </div>
                    </div>
                </div>
            </div>
            <div className='mainPosts'>
                <div className='container'>
                    My posts
                </div>

            </div>
        </main>
    );
}

export default Profile
