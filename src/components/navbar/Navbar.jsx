import React from "react"

const Navbar = () => {
    return (
        <nav>
            <div className='container'>
                <div className='navBlock'>
                    <div className='flexBlockSpaceBetween'>
                        <div className='logoBlock'>
                            <h2>LOGO</h2>
                        </div>
                        <div className='menuBlock'>
                            <ul className='menu'>
                                <li className='menuItem'>
                                    <a href='#'>Profile</a>
                                </li>
                                <li className='menuItem'>
                                    <a href='#'>Messages</a>
                                </li>
                                <li className='menuItem'>
                                    <a href='#'>News</a>
                                </li>
                                <li className='menuItem'>
                                    <a href='#'>Music</a>
                                </li>
                                <li className='menuItem'>
                                    <a href='#'>Settings</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
