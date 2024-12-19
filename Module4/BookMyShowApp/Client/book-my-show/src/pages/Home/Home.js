import { useEffect } from "react";
import { getAllMovies } from "../../calls/movies";

function Home(){

    const fetchMovies = async ()=>{


        const response = await getAllMovies();
        console.log(response);

    }   

    useEffect(()=>{
        fetchMovies();
    },[])

    return <h1> 
        Home
    </h1>
    
}

export default Home;