import { B1, B2, B3, B4, B5 } from '../assets/Banner/Images';
import './Welcome.css';

const WelcomeBanner = () => {
    return (
        <div className="welcomeBanner">
            <img alt="bannerImage" className="topImg" src = {B5} />
            <img alt="bannerImage" className="bottomImg" src = {B4} />
            <img alt="bannerImage" className="leftImg" src = {B2} />
            <img alt="bannerImage" className="rightImg" src = {B3} />
            <img alt="bannerImage" className="centerImg" src = {B1} />
        </div>
    )
}

export default WelcomeBanner;