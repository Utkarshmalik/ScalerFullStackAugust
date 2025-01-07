const { onLogin, onRegister, onForgetPassword, onResetPassword } = require("../Controllers/auth.controller");



module.exports = (app)=>{

    app.post("/register",onRegister);
    app.post("/login",onLogin)
    app.post("/forget",onForgetPassword)
    app.post("/reset",onResetPassword)

}