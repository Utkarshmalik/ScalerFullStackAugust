const { createNewShow, getAllShows, getTheatesAndShowsByMovieId } = require("../Controllers/shows.controller");
const { verfiyToken, verifyAdminOrPartner } = require("../Middlewares/auth.middleware");



module.exports = (app)=>{

    app.post("/shows",[verfiyToken, verifyAdminOrPartner],createNewShow);
    app.get("/shows", [verfiyToken],getAllShows);
    app.get("/movies/:movieId/shows",[verfiyToken],getTheatesAndShowsByMovieId);

}