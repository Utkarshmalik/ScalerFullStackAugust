import { useContext, useEffect, useState } from "react";
import genreIdMappings from "../../configurations/genreConfig";
import { WatchListContext } from "../../App";


function WatchList(props){

     const watchListContextValue = useContext(WatchListContext);

        const {watchList, removeFromWatchList} = watchListContextValue;



        const genreSet = new Set();


    const [movies, setMovies] = useState(watchList);
    const [searchValue, setSearchValue] = useState("");

    useEffect(()=>{
        setMovies(watchList);
    },[watchList])


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


    const onSearchInputChange = (e)=>{

        const searchFieldValue = e.target.value;
        setSearchValue(searchFieldValue);

        const filteredMovies = watchList.filter((movie)=>{
            return movie.title.toLowerCase().startsWith(searchFieldValue.toLowerCase());
        })

        setMovies(filteredMovies);


    }


    return <div>

        <div className="flex justify-center m-4">

            {

                genres.map((genre)=>{
                    return <div className="mx-4 bg-blue-400 h-[3rem] w-[9rem] flex justify-center items-center rounded-xl text-white font-bolder " > {genre} </div>
                })

            }

        </div>


        <div className="my-10">

            <input onChange={onSearchInputChange} value={searchValue} type="text" placeholder="Search Movies" 
            
            className="h-[3rem] w-[20rem] border divide-gray-800  px-4"
            />


        </div>


        <div>

            <table className="my-10 w-full ">

                <thead className="">
                    <tr>
                    <th>Name </th>
                    <th>Rating </th>
                    <th>Popularity </th>
                     <th>Genre </th>
                   </tr>
                </thead>

                <tbody className="my-20">

                    {

                        movies.map((movie)=>{

                            return <tr className="my-20">

                                <td className="flex items-center">
                                    <img className="h-[10rem] w-[12rem] object-fit" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                                    <div className="px-10 font-medium">  {movie.title} </div>
                                </td>

                                <td>
                                    {movie.vote_average}
                                </td>
                                <td>
                                    {movie.popularity}
                                </td>
                                <td>
                                    { genreIdMappings[movie.genre_ids[0]] } 
                                </td>

                                <td onClick={()=>removeFromWatchList(movie)}  className="text-red-500">
                                    Delete
                                </td>

                            </tr>
                        })
                    }


                </tbody>

          



            </table>



        </div>

        

    </div>

}

export default WatchList;