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

module.exports={
    createNewShow,getAllShows
}