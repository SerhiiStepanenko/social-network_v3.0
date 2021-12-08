import React from "react"

const Header = () => {
    return (
        <header className='header'>
            <div className='headerBlock'>
                <div className='container'>
                    <div className='loginRegisterBlock'>
                        <button>login</button>
                        <button>register</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header
