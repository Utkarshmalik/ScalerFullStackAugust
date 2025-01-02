const mongoose = require("mongoose");
const MovieModel = require("../Models/Movie.model");

const getAllMovies = async (req,res)=>{

    try{

        const allMovies = await MovieModel.find({});

        return res.status(200).send({
            success:true,
            message:"All movies have been fetched",
            data:allMovies
        })


    }catch(err){
        return res.status(500).send({message:"Internal Server Error",err});
    }


}

const getMovieById = async (req,res)=>{

    try{

        const allMovies = await MovieModel.findById(req.params.id);

        return res.status(200).send({
            success:true,
            message:"All movies have been fetched",
            data:allMovies
        })


    }catch(err){
        return res.status(500).send({message:"Internal Server Error",err});
    }


}
const createNewMovie = async (req,res)=>{

    try{

        const newMovie = new MovieModel(req.body);
        const dbResponse = await newMovie.save();


        if(dbResponse!=null){
              return res.status(201).send({
            success:true,
            message:"New Movie has been successfully added"
           });
        }



    }catch(err){
        return res.status(500).send({message:"Internal Server Error",err});
    }

}


const updateMovieById = async (req,res)=>{

    const movieId = req.params.id;

     if(!mongoose.Types.ObjectId.isValid(movieId)){
        return res.status(404).send({
            success:false,
            message:`The movie Id : ${movieId} is invalid`
        })
    }

   try{

    const movie = await MovieModel.findById(movieId);

    if(!movie){
        return res.status(404).send({
            success:false,
            message:`The movie Id : ${movieId} is invalid`
        })
    }

    const updateRes = await MovieModel.findByIdAndUpdate(movieId,req.body,{new:true});

    if(updateRes!=null){
        return res.status(200).send({
            success:true,
            message:`The data movie Id : ${movieId} is updated successfully`,
            data:updateRes
        })

    }


    }catch(err){
        console.log(err);
        return res.status(500).send({message:"Internal Server Error",err});
    }
}


const deleteMovieById = async (req,res)=>{

 const movieId = req.params.id;

     if(!mongoose.Types.ObjectId.isValid(movieId)){
        return res.status(404).send({
            success:false,
            message:`The movie Id : ${movieId} is invalid`
        })
    }

   try{

    const movie = await MovieModel.findById(movieId);

    if(!movie){
        return res.status(404).send({
            success:false,
            message:`The movie Id : ${movieId} is invalid`
        })
    }


    const deleteResonse = await MovieModel.findByIdAndDelete(movieId);

    if(deleteResonse!=null && deleteResonse.deleteCount!=0){
        return res.status(200).send({
            success:true,
            message:`The movie Id : ${movieId} is deleted successfully`
        })
    }
    

    }catch(err){
        console.log(err);
        return res.status(500).send({message:"Internal Server Error",err});
    }
}

module.exports= {
    getAllMovies,
    createNewMovie,
    updateMovieById,
    deleteMovieById,
    getMovieById
}