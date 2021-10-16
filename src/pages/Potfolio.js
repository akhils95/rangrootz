import { useEffect } from "react";
import GridGallery from '../components/GridGallery';

const Portfolio = () => {

    useEffect(() => {
        document.title = "Portfolio | Rangrootz Production";
    })

    return (
        <div className="page extraPad">
            <GridGallery />
        </div>
    )
}

export default Portfolio;