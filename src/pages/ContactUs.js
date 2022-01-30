import { useEffect } from "react";
import './ContactUs.css';

const ContactUs = () => {

    useEffect(() => {
        document.title = "Home | Rangrootz Production";
    })

    return(
        <div className="page">
            <div className = "cameraScreen">
                <div className = "element topLeft"></div>
                <div className = "element topRight"></div>
                <div className = "element bottomLeft"></div>
                <div className = "element bottomRight"></div>
                <div className = "recording"><div className="circle"></div> Recording</div>
            </div>
            <div className="contactPage">Info will be added soon.</div>
        </div>
    );
}

export default ContactUs;