import React from "react"
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <div className={s.container}>
                <div className={s.navBlock}>
                    <div className={s.flexBlockSpaceBetween}>
                        <div>
                            <h2>LOGO</h2>
                        </div>
                        <div className={s.menuBlock}>
                            <ul className={s.menu}>
                                <li className={s.menuItem}>
                                    <a href='/'>Profile</a>
                                </li>
                                <li className={s.menuItem}>
                                    <a href='/dialogs'>Messages</a>
                                </li>
                                <li className={s.menuItem}>
                                    <a href='news'>News</a>
                                </li>
                                <li className={s.menuItem}>
                                    <a href='music'>Music</a>
                                </li>
                                <li className={s.menuItem}>
                                    <a href='settings'>Settings</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
