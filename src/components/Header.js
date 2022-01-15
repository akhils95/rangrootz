import React from 'react';
import './ComponentStyles.css';

const Header = (visible) => {

    return(
        <div className = {visible.visible ? "header" : "hidden"}>
            <h1 className="headerLogo">
                <span className = "logoFont1">RANGROOTZ</span>
                <span className = "logoFont2">PRODUCTION</span>
            </h1>
            <div className = "menuFull">
                <a className = 'menuItem' href = '/portfolio'>Portfolio</a>
                <a className = 'menuItem' href = '/contact-us'>Contact Us</a>
                <p className = "phoneMenu">Menu</p>
            </div>
        </div>
    );
}

export default Header;