const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    movieName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    genre:{
        type:[String],
        required:true
    },
    language:{
        type:String,
        required:true
    },
    poster:{
        type:String,
        required:true
    },
    releaseDate:{
        type:Date,
        required:true
    }

})

const MovieModel = mongoose.model("movies",movieSchema);

module.exports = MovieModel;
