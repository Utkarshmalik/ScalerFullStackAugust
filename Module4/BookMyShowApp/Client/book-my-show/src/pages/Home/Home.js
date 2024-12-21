import { useEffect } from "react";
import { getAllMovies } from "../../calls/movies";
import MovieList from "../../Components/MovieList";

function Home(){

    const fetchMovies = async ()=>{


        const response = await getAllMovies();
        console.log(response);

    }   

    useEffect(()=>{
        fetchMovies();
    },[])

    return <div>
          <MovieList/>
        </div>
    
}

export default Home;