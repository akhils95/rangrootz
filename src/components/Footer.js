import './ComponentStyles.css';
import { Facebook, Instagram } from '../assets/Icons/Icons';
import { useState, useEffect } from 'react';

const Footer = () => {

    const [year, setYear] = useState("");

    useEffect(() => {
        let date = new Date();
        setYear(date.getFullYear());
    },[])

    return(
        <div className="footer">
            <p className="footerCopyright">
                <span>&#169; { year } Rangrootz Production,</span>
                <span> </span>
                <span>All Rights Reserved</span>
            </p>
            <p className="footerIcons">
                <a href="https://www.facebook.com/rangrootzproduction/" target="_blank" rel="noreferrer">
                    <img src = { Facebook } alt = "Facebook" />
                </a>
                <a href="https://www.instagram.com/rangrootz/" target="_blank" rel="noreferrer">
                    <img src = { Instagram } alt = "Instagram" />
                </a>
            </p>
        </div>
    );
}

export default Footer;