const { getAllMovies, createNewMovie } = require("../Controllers/movies.controllers");
const { verfiyToken } = require("../Middlewares/auth.middleware");



module.exports = (app)=>{

    app.get("/movies",[verfiyToken],getAllMovies);
    app.post("/movies",[verfiyToken],createNewMovie);

}