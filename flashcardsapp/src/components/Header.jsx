import React from 'react';
import './Header.scss'
import Logo from '../assets/img/logo.jpeg';

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={Logo} alt='logo' />
            </div>
            <div className="header__slogan"><h1>Make your learning more effective</h1></div>
            <div className="header__login"><a>Log in</a>
            </div>
        </div>
    )
}

export default Header;