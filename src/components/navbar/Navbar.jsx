import React from "react"
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {menuItems} from "./serverFile";
import {logo} from "./serverFile";

const Navbar = () => {
    return (
        <nav>
            <div className={s.container}>
                <div className={s.navBlock}>
                    <div className={s.flexBlockSpaceBetween}>
                        <div>
                            <h2>{logo}</h2>
                        </div>
                        <div className={s.menuBlock}>
                            <ul className={s.menu}>
                                {menuItems.map(item => (
                                    <li className={s.menuItem}>
                                        <NavLink to={item.to} className={navData => navData.isActive && s.activeLink}>
                                            {item.item}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
