const { createTheatre, getAllTheatres } = require("../Controllers/theatre.controller");
const { verfiyToken, verifyAdminOrPartner } = require("../Middlewares/auth.middleware");



module.exports = (app)=>{

    app.post("/theatres",[verfiyToken,verifyAdminOrPartner],createTheatre);
    app.get("/theatres", [verfiyToken],getAllTheatres);

}