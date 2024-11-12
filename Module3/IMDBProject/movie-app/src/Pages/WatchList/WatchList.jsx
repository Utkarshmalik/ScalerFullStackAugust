import { useState } from "react";
import genreIdMappings from "../../configurations/genreConfig";


function WatchList(props){

        const {watchList} = props;

        const genreSet = new Set();


    const [movies, setMovies] = useState(watchList);


    movies.forEach((movie)=>{

        const genreIds = movie.genre_ids;

        genreIds.forEach((id)=>{
                    genreSet.add(genreIdMappings[id]);

        })
    })

    console.log("genres ",genreSet);

    const genres = Array.from(genreSet);
    genres.unshift("All Genres");

    console.log(genres);

    return <div>

        <div className="flex justify-center m-4">

            {

                genres.map((genre)=>{
                    return <div className="mx-4 bg-blue-400 h-[3rem] w-[9rem] flex justify-center items-center rounded-xl text-white font-bolder " > {genre} </div>
                })

            }

        </div>



        {
            movies.map((movie)=>{
                return <h2> {movie.title} </h2>
            })
        }

    </div>

}

export default WatchList;