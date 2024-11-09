import { useEffect, useState } from "react";
import Spinner from "../Common/Spinner/Spinner";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";


function Movies(){

    const [movies,setMovies]  = useState([]);
    const [loading,setLoading]  = useState(true);


        const fetchMovieData= async ()=>{
       const res = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=1439d8ee0449071c8283dae52000692e");
       console.log(res);
       let movies = res.data.results;

       setMovies(movies);
       setLoading(false);

    }

    useEffect(()=>{
        fetchMovieData();
    },[]);

    if(loading){
        return <Spinner/>
    }

    return <div>

        <div className="text-2xl font-bold m-5" >

            <h1> Trending Movies </h1>

            <div className="flex flex-wrap gap-8 justify-evenly align-center mt-5" >

                {
                    movies.map((movieObj)=>{

                        return <MovieCard movieObj={movieObj} />

                    })
                }


            </div>

        </div>
       
         
    </div>

}

export default Movies;