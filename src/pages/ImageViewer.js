import { useEffect, useState } from 'react';
import {H1, H2, H3, H4, H5, H6, H7, H8, H9, H10, H11, H12, H13, H14, H15, H16,
 V1, V2, V3, V4, V5, V6, V7, V8, V9, V10, V11, V12, V13, V14, V15, V16} from '../assets/Portfolio/Images';
import { closeIcon, rightIcon, leftIcon } from '../assets/Icons/Icons';

const ImageViewer = (image) => {

    const [openImage, setOpenImage] = useState(H1);

    const imageSequence = [H1,H2,H3,H4,V1,V2,V3,V4,H5,H6,H7,H8,V5,V6,V7,V8,H9,H10,H11,H12,V9,V10,V11,V12,H13,H14,H15,H16,V13,V14,V15,V16];

    useEffect(() => {
        switch(image.image) {
            case 'H1': 
                setOpenImage(H1);
                break;
            case 'H2': 
                setOpenImage(H2);
                break;
            case 'H3': 
                setOpenImage(H3);
                break;
            case 'H4': 
                setOpenImage(H4);
                break;
            case 'H5': 
                setOpenImage(H5); 
                break;
            case 'H6': 
                setOpenImage(H6); 
                break;
            case 'H7': 
                setOpenImage(H7); 
                break;
            case 'H8': 
                setOpenImage(H8); 
                break;
            case 'H9': 
                setOpenImage(H9); 
                break;
            case 'H10': 
                setOpenImage(H10);
                break;
            case 'H11': 
                setOpenImage(H11);
                break;
            case 'H12': 
                setOpenImage(H12);
                break;
            case 'H13': 
                setOpenImage(H13);
                break;
            case 'H14': 
                setOpenImage(H14);
                break;
            case 'H15': 
                setOpenImage(H15);
                break;
            case 'H16': 
                setOpenImage(H16);
                break;
            case 'V1': 
                setOpenImage(V1);
                break;
            case 'V2': 
                setOpenImage(V2);
                break;
            case 'V3': 
                setOpenImage(V3); 
                break;
            case 'V4': 
                setOpenImage(V4);
                break;
            case 'V5': 
                setOpenImage(V5); 
                break;
            case 'V6': 
                setOpenImage(V6); 
                break;
            case 'V7': 
                setOpenImage(V7); 
                break;
            case 'V8': 
                setOpenImage(V8); 
                break;
            case 'V9': 
                setOpenImage(V9); 
                break;
            case 'V10': 
                setOpenImage(V10);
                break;
            case 'V11': 
                setOpenImage(V11);
                break;
            case 'V12': 
                setOpenImage(V12);
                break;
            case 'V13': 
                setOpenImage(V13);
                break;
            case 'V14': 
                setOpenImage(V14);
                break;
            case 'V15': 
                setOpenImage(V15);
                break;
            case 'V16': 
                setOpenImage(V16);
                break;
            default: setOpenImage("notfound");
        }
    },[image])

    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress);
        return () => {
            window.removeEventListener('keydown', handleUserKeyPress);
        };
    });

    const handleUserKeyPress = (event) => {
        if (event.key === 'Escape') {
            document.getElementById('close').click();
        } else if (event.key === 'ArrowRight') {
            document.getElementById('next').click();
        } else if (event.key === 'ArrowLeft') {
            document.getElementById('previous').click();
        }
    }

    const nextImage = () => {
        const index = imageSequence.indexOf(openImage)
        let nextIndex = 0;
        console.log(index);
        if (index === imageSequence.length -1) {
            nextIndex = 0;
        } else {
            nextIndex = index + 1;
        }
        console.log(nextIndex);
        console.log(imageSequence[nextIndex]);
        setOpenImage(imageSequence[nextIndex]);
    }

    const previousImage = () => {
        const index = imageSequence.indexOf(openImage)
        let nextIndex = 0;
        console.log(index);
        if (index === 0) {
            nextIndex = imageSequence.length - 1;
        } else {
            nextIndex = index - 1;
        }
        console.log(nextIndex);
        console.log(imageSequence[nextIndex]);
        setOpenImage(imageSequence[nextIndex]);
    }

    return(
        <div className="imageViewer" id="viewer">
            <a id='close' href="/portfolio">
                <img className='closeIcon' src={closeIcon} alt='CLOSE' />
            </a>
            <img src = { openImage } alt = {image.image} />
            <div className = "imageCover">
                <img id='previous' className='nextPreviousIcon' src={ leftIcon } alt='PREVIOUS' onClick={previousImage} />
                <img id='next' className='nextPreviousIcon' src={ rightIcon } alt='NEXT' onClick={nextImage} />
            </div>
        </div>
    )
}

export default ImageViewer;