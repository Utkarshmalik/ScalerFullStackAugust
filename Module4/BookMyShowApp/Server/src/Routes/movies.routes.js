const { getAllMovies } = require("../Controllers/movies.controllers");



module.exports = (app)=>{

    app.get("/movies",getAllMovies);

}