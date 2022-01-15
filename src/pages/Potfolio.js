import { useEffect } from "react";
import GridGallery from '../components/GridGallery';

const Portfolio = () => {

    useEffect(() => {
        document.title = "Portfolio | Rangrootz Production";
    })

    return (
        <div className="page extraPad">
            <h1>Checkout Some of our work...</h1>
            <GridGallery />
        </div>
    )
}

export default Portfolio;