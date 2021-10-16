import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        document.title = "Home | Rangrootz Production";
    })

    return(
        <div className="page">HOME</div>
    );
}

export default Home;