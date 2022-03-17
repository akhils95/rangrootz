import WelcomeBanner from '../components/WelcomeBanner';
import Camera from '../assets/Icons/Camera.svg';

const Welcome = () => {

    return (
        <div className="welcomePage">
            <WelcomeBanner />
            <div className="bannerCover">
                <h1 className="logo">
                    <span className="logoFont1">Rangrootz</span>
                    <span className="logoFont2">Production</span>
                </h1>
                <h3>
                    <span>We immortalize your memories through our</span>
                    <img className="icon" alt="camera" src={Camera} />
                </h3>
                <a href="/home">
                    <div className="button">Enter</div>
                </a>
            </div>
        </div>
    )
}

export default Welcome;