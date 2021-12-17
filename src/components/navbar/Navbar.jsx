import React from "react"
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav>
            <div className={s.container}>
                <div className={s.navBlock}>
                    <div className={s.flexBlockSpaceBetween}>
                        <div>
                            <h2>{props.navBar.logo}</h2>
                        </div>
                        <div className={s.menuBlock}>
                            <ul className={s.menu}>
                                {props.navBar.menuItems.map(item => (
                                    <li className={s.menuItem}
                                        key={item.id}>
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
