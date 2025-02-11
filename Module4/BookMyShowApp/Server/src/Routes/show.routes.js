const { createNewShow, getAllShows, getTheatesAndShowsByMovieId, getShowDetailsByShowId } = require("../Controllers/shows.controller");
const { verfiyToken, verifyAdminOrPartner } = require("../Middlewares/auth.middleware");



module.exports = (app)=>{

    app.post("/shows",[verfiyToken, verifyAdminOrPartner],createNewShow);
    app.get("/shows", [verfiyToken],getAllShows);
    app.get("/movies/:movieId/shows",[verfiyToken],getTheatesAndShowsByMovieId);
    app.get("/shows/:id", [verfiyToken],getShowDetailsByShowId);


}