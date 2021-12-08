import React from "react"
import s from './Profile.module.css'

const Profile = () => {
    return (
        <main>
            <div className={s.mainDescription}>
                <div className={s.container}>
                    <div className={s.flexBlockSpaceBetween}>
                        <div className={s.ava}>
                            <img
                                src='https://showmania.novy.tv/wp-content/uploads/sites/529/2019/01/GettyImages-1089877744.jpg'
                                alt='ava'/>
                        </div>
                        <div className='description'>
                            description
                        </div>
                    </div>
                </div>
            </div>
            <div className='mainPosts'>
                <div className={s.container}>
                    My posts
                </div>
            </div>
        </main>
    )
}

export default Profile
