const { getAllMovies, createNewMovie, updateMovieById, deleteMovieById, getMovieById } = require("../Controllers/movies.controllers");
const { verfiyToken, verifyAdmin } = require("../Middlewares/auth.middleware");



module.exports = (app)=>{

    app.get("/movies",[verfiyToken],getAllMovies);
    app.get("/movies/:id",[verfiyToken],getMovieById);
    app.post("/movies",[verfiyToken, verifyAdmin],createNewMovie);
    app.put("/movies/:id",[verfiyToken,verifyAdmin],updateMovieById);
    app.delete("/movies/:id",[verfiyToken,verifyAdmin], deleteMovieById);

}