import { useContext } from "react";
import { WatchListContext } from "../../App";


function MovieCard(props){

    const {movieObj}  = props;


    const watchListContextValue  = useContext(WatchListContext);

        const {addToWatchList, removeFromWatchList, watchList} = watchListContextValue;


    console.log("context value is",watchListContextValue);


    let moviePoster =  movieObj.backdrop_path;
    let movieTitle = movieObj.title;
    
    let isMovieInWatchList = watchList.find((watchListMovie)=>{
        return watchListMovie.id == movieObj.id;
    })


    const moviePosterUrl = `url(https://image.tmdb.org/t/p/original/${moviePoster})`;

    return <div className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl flex flex-col justify-between items-end hover:scale-110 duration-300 rounded hover:cursor-pointer "
    style={{backgroundImage:moviePosterUrl}} >
        

        {

            (!isMovieInWatchList) ? <div onClick={()=>addToWatchList(movieObj)}  className="m-4 flex items-center justify-end bg-gray-900/60 rounded" >
                &#128525;
                </div> 
                :
                <div onClick={()=>removeFromWatchList(movieObj)} className="m-4 flex items-center justify-end bg-gray-900/60 h-8 w-8 rounded">
                    &#10060;
                </div>

        }


        <div className="text-xl text-white bg-gray-900 bg-opacity-60 text-center w-full" >
            {movieTitle}
        </div>


    </div>

}

export default MovieCard;