const { onLogin, onRegister } = require("../Controllers/auth.controller");



module.exports = (app)=>{

    app.post("/register",onRegister);
    app.post("/login",onLogin)

}