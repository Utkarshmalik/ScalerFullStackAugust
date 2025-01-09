const { default: mongoose } = require("mongoose");
const MovieModel = require("../Models/Movie.model");
const ShowsModel = require("../Models/Show.model");
const TheatreModel = require("../Models/Theatre.model");


const createNewShow = async (req,res)=>{

    console.log(req.body);
    const {theatre, movie} = req.body;

    try{

        const theatreDBObj = await TheatreModel.findById(theatre);

        if(theatreDBObj==null){
            return res.status(400).send({
                success:false,
                message:"TheatreId is invalid"
            })
        }

        const movieDBObj = await MovieModel.findById(movie);


        if(movieDBObj==null){
            return res.status(400).send({
                success:false,
                message:"MovieId is invalid"
            })
        }

        
        const newShow = new ShowsModel(req.body);
        await newShow.save();
       

        return res.status(201).send({
            success:true,
            message:"New Show has been added Successfully"
        })

    }catch(err){
        return res.status(500).send({message:"Internal Server Error",err});
    }

}

const getAllShows = async (req,res)=>{

    try{

        const allShows = await ShowsModel.find({}).populate("theatre").populate("movie");

        return res.status(201).send({
            success:true,
            message:"Shows has been fetched Successfully",
            data:allShows
        })

    }catch(err){
        return res.status(500).send({message:"Internal Server Error",err});
    }


}


const getTheatesAndShowsByMovieId = async (req,res)=>{

    const {movieId} = req.params;
    const {date} = req.query;

    // list of unique theatres and the shows for this movie in that theatre 

    let allShows = await ShowsModel.find({movie:movieId}).populate("theatre");


    //first get all unique theatres from the shows 


    let allUniqueTheatres = [];

    allShows.forEach((show)=>{
        const theatre = allUniqueTheatres.find((theatreId)=>{
            return theatreId === show.theatre._id;
        });
        if(!theatre){
            allUniqueTheatres.push(show.theatre._id);
        }
    });


    const uniqueTheatresAndTheirShows = allUniqueTheatres.map((theatreId)=>{

        //get all shows for this theatreId 

        const allShowsForParticularTheatre = allShows.filter((show)=>{
            return show.theatre._id === theatreId
        });

        
        return {

            theatreId,
            theatreDetails: allShowsForParticularTheatre[0].theatre,
            allShowsForParticularTheatre
        }

    })

    return res.status(200).send({
        success:true,
        message:"All Shows Fetched for the given movie",
        data:uniqueTheatresAndTheirShows  
    })


}


const getShowDetailsByShowId = async (req,res)=>{

    try{

        const showId = req.params.id;

        if(!mongoose.Types.ObjectId.isValid(showId)){

            return res.status(400).send({
                success:false,
                message:"Show id passed is invalid format"
            })
        }

        const show = await ShowsModel.findById(showId).populate('theatre').populate('movie');

        if(!show){
            return res.status(400).send({
                success:false,
                message:"Show id passed is invalid"
            })
        }


        return res.send({
            success:true,
            message:"Show fetched successfully",
            data:show
        })


    }
    catch(err){
            return res.status(500).send({message:"Internal Server Error",err});
        }

    

}

module.exports={
    createNewShow,getAllShows,getTheatesAndShowsByMovieId,getShowDetailsByShowId
}