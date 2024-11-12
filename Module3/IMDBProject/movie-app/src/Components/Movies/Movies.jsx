import { useEffect, useState } from "react";
import Spinner from "../Common/Spinner/Spinner";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import Pagination from "../Pagination/Pagination";


function Movies(props){

    const [movies,setMovies]  = useState([]);
    const [loading,setLoading]  = useState(true);
    const [pageNumber , setPageNumber] = useState(1);

        const {addToWatchList, removeFromWatchList, watchList} = props;


    const fetchMovieData = async ()=>{

        setLoading(true);
        
       const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=1439d8ee0449071c8283dae52000692e&page=${pageNumber}`);
       console.log(res);
       let movies = res.data.results;

       setMovies(movies);
       setLoading(false);

    }

       //ComponentDidMount (after first initial render) + ComponentDidUpdate(Every time page Number state is updated )
        useEffect(()=>{
            fetchMovieData();
        },[pageNumber]);



        const previousPageFn = function(){

            //i need to make a API call for page=page-1


            if(pageNumber>1){
                setPageNumber(pageNumber-1);
            }

        }
        
        const nextPageFn = function(){

            //i need to make a API call for page=page+1

            setPageNumber(pageNumber+1);
        }




    if(loading){
        return <Spinner/>
    }

    return <div>

        <div className="text-2xl font-bold m-5" >

            <h1> Trending Movies </h1>

            <div className="flex flex-wrap gap-8 justify-evenly align-center mt-5" >

                {
                    movies.map((movieObj)=>{

                        return <MovieCard watchList={watchList} addToWatchList={addToWatchList} removeFromWatchList={removeFromWatchList} movieObj={movieObj} />

                    })
                }


            </div>

        </div>


        <Pagination pageNumber={pageNumber} previousPageFn={previousPageFn} nextPageFn={nextPageFn} />
         
    </div>

}

export default Movies;