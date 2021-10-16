import React from 'react';
import './ComponentStyles.css';
import { useState, useEffect } from 'react';

const Header = (visible) => {
    const [clas, setClas] = useState("hamburger");
    const [cls, setCls] = useState("menu menuClose");
    const [year, setYear] = useState("");

    useEffect(() => {
        let date = new Date();
        setYear(date.getFullYear());
    },[])

    const openMenu = () => {
        setClas("hamburger open");
        setCls("menu menuOpen");
    };

    const closeMenu = () => {
        setClas("hamburger");
        setCls("menu menuClose");
    }

    return(
        <div className = {visible.visible ? "header" : "hidden"}>
            <div className = { clas } onClick = { openMenu } >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className = { cls }>
                <div className="menuLogo">
                    <h1 className="headerLogo">
                        <span className = "logoFont1">RANGROOTZ</span>
                        <span className = "logoFont2">PRODUCTION</span>
                    </h1>
                </div>
                <div className="closeIcon" onClick={ closeMenu }>
                    <span></span>
                    <span></span>
                </div>
                <div className="menuItems">
                    <a className="menuItem" href="/home">Home</a>
                    <a className="menuItem" href="/about">About</a>
                    <a className="menuItem" href="/portfolio">Portfolio</a> 
                </div>
                <p className="footerCopyright">
                    <span>&#169; { year } Rangrootz Production,</span>
                    <span> </span>
                    <span>All Rights Reserved</span>
                </p>
            </div>
            <h1 className="headerLogo">
                <span className = "logoFont1">RANGROOTZ</span>
                <span className = "logoFont2">PRODUCTION</span>
            </h1>
        </div>
    );
}

export default Header;