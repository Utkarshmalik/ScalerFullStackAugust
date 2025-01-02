import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieById } from "../../calls/movies";
import Navbar from "../../Components/ Navbar/Navbar";
import { Flex, Input } from "antd";
import moment from "moment";

function SingleMovie(){
    
    const [movie,setMovie] = useState(null);
    const [date, setDate]=  useState(moment().format("YYYY-MM-DD"));
    const navigate = useNavigate();

    const params = useParams();

    const getData = async ()=>{
        const movieAPIResponse = await getMovieById(params.id);
        setMovie(movieAPIResponse.data.data)
    }

    const handleDate = (e)=>{

        setDate(e.target.value);
        navigate(`/movie/${params.id}?date=${e.target.value}`)

    } 

    useEffect(()=>{

        getData();

    },[])




    return <div>

        <Navbar/>

        {

            movie && (

                <Flex gap="large" justify="center" align="center">

                  <div>
                    <img src={movie.poster} width={200} />
                  </div>


                  <div>

                    <h1> {movie.movieName} </h1>

                    <p> Language : {movie.language} </p>

                    <p> Genre : {movie.genre} </p>

                    <p> Release Date : {movie.releaseDate} </p>

                    <p> Duration : {movie.duration} </p>

                    <hr/>

                    <div>

                        <label> Choose the Date : </label>
                        <Input onChange={handleDate} type="date" value={date} />
                    </div>


                  </div>  



              </Flex>

            )




        }



    </div>

}

export default SingleMovie;