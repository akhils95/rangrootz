import React from 'react';
import { useState } from 'react';
import './ComponentStyles.css';

const Header = (visible) => {

    const [menuOpen, setmenuOpen] = useState(false);

    const toggleMenu = () => {
        setmenuOpen(!menuOpen)
    }

    const closeMenu = () => {
        setmenuOpen(false)
    }

    return(
        <div className='menuHeaderWrapper'>
            <div className='topMenu' style={menuOpen ? {height:"200px"} : {height:"0"}} onClick = { closeMenu } >
                <a href = '/portfolio'><div className='topMenuItem' style={menuOpen ? {display:"flex"} : {display:"none"}}>Home</div></a>
                <a href = '/about'><div className='topMenuItem' style={menuOpen ? {display:"flex"} : {display:"none"}}>About</div></a>
                <a href = '/films'><div className='topMenuItem' style={menuOpen ? {display:"flex"} : {display:"none"}}>Films</div></a>
                <a href = '/contact-us'><div className='topMenuItem' style={menuOpen ? {display:"flex"} : {display:"none"}}>Contact Us</div></a>
            </div>
            <div className = {visible.visible ? "header" : "hidden"}>
                <a href = '/home'>
                    <h1 className="headerLogo">
                        <span className = "logoFont1">RANGROOTZ</span>
                        <span className = "logoFont2">PRODUCTION</span>
                    </h1>
                </a>
                <div className = "menuFull">
                    <a className = 'menuItem' href = '/portfolio'>Home</a>
                    <a className = 'menuItem' href = '/about'>About</a>
                    <a className = 'menuItem' href = '/films'>Films</a>
                    <a className = 'menuItem' href = '/contact-us'>Contact</a>
                    <p className = "phoneMenu" onClick = { toggleMenu }>Menu</p>
                </div>
            </div>
        </div>
    );
}

export default Header;