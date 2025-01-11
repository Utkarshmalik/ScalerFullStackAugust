import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getShowDetails } from "../../calls/shows";
import {Card, Row, Col, Button, message} from "antd";
import Navbar from "../../Components/ Navbar/Navbar";
import StripeCheckout from "react-stripe-checkout";
import { CreateBooking, MakePayment } from "../../calls/bookings";

function BookShow(){

    const params = useParams();
    const navigate = useNavigate();

    const showId = params.showId;

    const [showDetails, setShowDetails] = useState(null);
    const [selectedSeats, setSelectedSeats]  = useState([]);


    const getSeats = ()=>{

        const columns = 12;
        const totalSeats = 120;

        const rows = totalSeats/columns; //10

        let allRows = [];

        for(let i=0;i<rows;i++){
            allRows.push(i);
        }

        let allColumns = [];

        for(let j=0;j<columns;j++){
            allColumns.push(j);
        };

        const handleSeatSelect  = (seatNumber)=>{

            seatNumber = seatNumber.toString();

            if(showDetails.bookedSeats.includes(seatNumber)){
                return;
            }

            if(!selectedSeats.includes(seatNumber)){
                setSelectedSeats([...selectedSeats, seatNumber]);
                return;
            }

            const updatedSelectedSeats = selectedSeats.filter((seat)=>seat!=seatNumber);
            setSelectedSeats(updatedSelectedSeats);
            
        }

return <div className="seat-ul" >

    <div>

            {

                allRows.map((row)=>{

                    return <div className="d-flex" >

                        {
                            allColumns.map((col)=>{

                                let seatNumber = row*columns + col + 1;

                                const isSeatBooked = showDetails.bookedSeats.includes(seatNumber.toString());

                                let seatClass = "seat-btn";
                                console.log(isSeatBooked);

                                if(isSeatBooked){
                                    seatClass += " seat-btn-booked";
                                }

                                if(selectedSeats.includes(seatNumber.toString())){

                                    seatClass+= " seat-btn-selected";
                                }

                                return <button onClick={()=>handleSeatSelect(seatNumber)} className={seatClass}>
                                    {seatNumber}
                                </button>

                            })

                        }
                      
                    </div>

                })
                
            }


            </div>

            <div className="d-flex bottom-card justify-content-between w-100 max-width-600 mx-auto mb-25px mt-3">
          <div className="flex-1">
            Selected Seats: <span>{selectedSeats.join(", ")}</span>
          </div>
          <div className="flex-shrink-0 ms-3">
            Total Price:{" "}
            <span>Rs. {selectedSeats.length * showDetails.ticketPrice}</span>
          </div>
        </div>

        </div>



    }

    const onToken = async (token)=>{

        console.log(token);

        try{
            const response = await MakePayment({amount:selectedSeats.length * showDetails.ticketPrice,
                token:token
            });

            if(response.data.success){
                message.success(response.data.message);


                const bookingResponse = await CreateBooking({showId:showDetails._id,seats:[...selectedSeats],
                    transactionId:response.data.data
                });

            
                if(bookingResponse.data.success){
                    message.success(bookingResponse.data.message);
                    navigate("/");
                }

            }

        }catch(err){

        }



    }

    const fetchShowData = async ()=>{

        try{
            const response = await getShowDetails(showId);
            setShowDetails(response.data.data);
        }
        catch(err){

        }

    }

    useEffect(()=>{
        fetchShowData();
    },[])
    

    return  <>

    <Navbar/> {
    
    showDetails && <div>

        <Row gutter={24}>

            <Col span={24}>

            <Card title= {
                <div>
                    <h1> {showDetails.movie.movieName}</h1>
                    <p>
                        Theatre : {showDetails.theatre.name}, {showDetails.theatre.address}
                    </p>
                </div>
            }

            extra = {
                <>
            
                <div>
                    <h3> Show Name : {showDetails.name} </h3>
                </div>

                <h4>
                    Ticket Price : {showDetails.ticketPrice}
                </h4>

                <h4>
                    Total Seats : {showDetails.totalSeats}
                </h4>


                <h4>
                    Available Seats : {showDetails.totalSeats - showDetails.bookedSeats.length}
                </h4>


                </>

            }

            style={{width:"100%"}}
            
            >

                {getSeats()}

                {

                    selectedSeats.length>0 && 

                    <StripeCheckout 
                    token={onToken}
                    stripeKey="pk_test_51Pk5XWKp25HZoc30bcTmozGCabcS6KEKI7isIVopkB8TmzislgHqHIY3fzvxstSTY6bSN6LhQeW3z7oYpkc242Sd008g8PAKBI" />

                }


            </Card>

            </Col>


        </Row>
        

    </div>
}

    </>

}

export default BookShow;


