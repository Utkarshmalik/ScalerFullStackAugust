const { getAllMovies, createNewMovie, updateMovieById, deleteMovieById } = require("../Controllers/movies.controllers");
const { verfiyToken, verifyAdmin } = require("../Middlewares/auth.middleware");



module.exports = (app)=>{

    app.get("/movies",[verfiyToken],getAllMovies);
    app.post("/movies",[verfiyToken, verifyAdmin],createNewMovie);
    app.put("/movies/:id",[verfiyToken,verifyAdmin],updateMovieById);
    app.delete("/movies/:id",[verfiyToken,verifyAdmin], deleteMovieById);

}