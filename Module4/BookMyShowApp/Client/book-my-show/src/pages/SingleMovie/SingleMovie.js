import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieById } from "../../calls/movies";
import Navbar from "../../Components/ Navbar/Navbar";
import { Col, Flex, Input, Row } from "antd";
import moment from "moment";
import { getShowsForAMovie } from "../../calls/shows";

function SingleMovie(){
    
    const [movie,setMovie] = useState(null);
    const [date, setDate]=  useState(moment().format("YYYY-MM-DD"));
    const [showsData, setShowsData]= useState(null);


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

    const getAllShowsForSelectedMovie=async ()=>{

        console.log(`get shows for movieId : ${params.id} and date : ${date}`);

        const showsData = await getShowsForAMovie(params.id,date);

        setShowsData(showsData.data.data);
    }


    useEffect(()=>{
        getAllShowsForSelectedMovie();
    },[date])

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


        {
            showsData && showsData.length===0 && (

                <div className="pt-3 m-5">

                    <h2 className="blue-clr"> 
                        Currently, No Theatres available for this movie!
                    </h2>
                </div>

            )
        }

        {

            showsData && showsData.length>0 && (

                <div className="m-3">

                    <h2> Theatres </h2>

                    {
                        showsData.map(showsData=>{

                            const theatreId = showsData.theatreId;
                            const theatreDetails = showsData.theatreDetails;
                            const allShowsForThisTheatre = showsData.allShowsForParticularTheatre;


                            return <div>

                                <Row gutter={24} >

                                    <Col lg={{span:8}} >

                                       <h3> {theatreDetails.name} </h3>
                                       <p> {theatreDetails.address}</p>

                                    </Col>

                                    <Col lg={{span:16}} >

                                    <ul className="show-ul">

                                        {
                                            allShowsForThisTheatre.map(singleShow=>{

                                                return <li onClick={()=>{
                                                    navigate(`book-show/${singleShow._id}`);

                                                }} > {singleShow.time} </li>
                                            })
                                        }

                                    </ul>
                                    
                                    </Col>



                                </Row>

                                </div>



                        })
                    }



                </div>    

            )

        }



    </div>

}

export default SingleMovie;