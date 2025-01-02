import { useEffect } from "react";
import { getAllMovies } from "../../calls/movies";
import MovieList from "../../Components/MovieList";
import Navbar from "../../Components/ Navbar/Navbar";
import { Col, Flex, Input, Row } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function Home(){

    const [movies,setMovies] = useState(null);
    const [searchText, setSearchText] = useState(""); 

    const navigate = useNavigate();

    const fetchMovies = async ()=>{

        const response = await getAllMovies();
        setMovies(response.data.data);

    }   

    useEffect(()=>{
        fetchMovies();
    },[])

    const onSearchInputChange=(e)=>{
        setSearchText(e.target.value);
    }

    return <div>

          <Navbar/>

          <Row style={{justifyContent:"center",marginTop:"20px"}} className="d-flex justify-content-center w-100">

            <Col lg={{span:12}} xs={{span:24}} >

            <Input value={searchText} onChange={onSearchInputChange}  placeholder="Type here to search for movies" />
            
            </Col>
          </Row>

          <Flex  wrap gap="large" justify="center" align="center" style={{marginTop:"10px",padding:"30px"}}>

            {

                movies && 

                movies.filter((movie)=>
                movie.movieName.toLowerCase().includes(searchText.toLowerCase()))
                .map((movie)=>{

                    return <div className="mb-5"
                    
                    span={{

                        lg:10,
                        xs:24,
                        md:12
                    }}
                    
                    >

                    <div className="text-center">

                        <img width={250} src={movie.poster} style={{borderRadius:"8px"}} />

                        <h3 className="cursor-pointer"  onClick={()=>{
                            navigate(`/movie/${movie._id}?date=${moment().format("YYYY-MM-DD")}`)

                        }} > {movie.movieName} </h3>

                    </div>


                    
                    </div>

                })

            }


          </Flex>

        </div>
    
}

export default Home;