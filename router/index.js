const User = require("../db/Usuarios");
const jwt = require("jwt-simple");

const SECRET = "Gk@42em#s$f@NV";

const MiddlewareValidSession = (request, response, nextMiddleware) =>{
    try{
        const my_user = jwt.decode(request.cookies.token, SECRET);
        User.findOne(my_user, (err, user) =>{
            if(err){
                return response.status(404).send("");
            }else{
                response.my_user = user;
                return nextMiddleware();
            }
        });
    }catch(e){
        return response.redirect("/");
    }
};


const MiddlewareInLogin = (request, response, nextMiddleware) =>{
    if(request.cookies.token){
        return response.redirect("/cursos")
    }
    return nextMiddleware();
};

module.exports =(app) =>{
    app.set('view engine', 'ejs');
    app.get("/", MiddlewareInLogin, (req, res, next)=>{
        res.render("contents/Login", {data: { title: "Login"}});
    });
}