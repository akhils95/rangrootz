import { useEffect, useState } from 'react';
import {H1,H2,H3,H4,H5,H6,H7,V1,V2,V3,V4} from '../assets/Portfolio/Images';

const ImageViewer = (image) => {

    const [openImage, setOpenImage] = useState(H1);

    useEffect(() => {
        switch(image.image) {
            case 'H1': setOpenImage(H1); break;
            case 'H2': setOpenImage(H2); break;
            case 'H3': setOpenImage(H3); break;
            case 'H4': setOpenImage(H4); break;
            case 'H5': setOpenImage(H5); break;
            case 'H6': setOpenImage(H6); break;
            case 'H7': setOpenImage(H7); break;
            case 'V1': setOpenImage(V1); break;
            case 'V2': setOpenImage(V2); break;
            case 'V3': setOpenImage(V3); break;
            case 'V4': setOpenImage(V4); break;
            default: setOpenImage("notfound");
        }
    },[image])

    return(
        <div className="imageViewer" id="viewer">
            <a href="/portfolio">
                <div className="closeIcon">
                    <span></span>
                    <span></span>
                </div>
            </a>
            <img src = { openImage } alt = {image.image} />
            <div className = "imageCover"></div>
        </div>
    )
}

export default ImageViewer;