import { useParams } from "react-router-dom";

function BookShow(){

    const params = useParams();

    console.log(params.showId);
    

    return <h1> Book Show Page </h1>

}

export default BookShow;