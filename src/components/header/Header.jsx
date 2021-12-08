import React from "react"
import s from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div className={s.headerBlock}>
                <div className={s.container}>
                    <div className={s.loginRegisterBlock}>
                        <button>login</button>
                        <button>register</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
