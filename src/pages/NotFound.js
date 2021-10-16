import { useEffect } from "react";

const NotFound = () => {

    useEffect(() => {
        document.title = "404 Not Found | Rangrootz Production";
    })

    return (
        <h1 className="page">Not Found</h1>
    );
    
}

export default NotFound;