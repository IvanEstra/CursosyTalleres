const User = require("../db/Usuarios");
const jwt = require("jwt-simple");

const SECRET = "Gk@em#s$f@NV";

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
        return response.redirect("/principal")
    }
    return nextMiddleware();
};

module.exports =(app) =>{
    app.set('view engine', 'ejs');
    app.get("/signin", MiddlewareInLogin, (req, res, next)=>{
        res.render("contents/Login", {data: { title: "Inciar Sesión"}});
    });
    app.get("/", (req, res, next)=>{
        res.render("contents/React", {data: { title: "Login"}});
    });
    app.get("/cursos", MiddlewareValidSession, (req, res, next)=>{
        res.render("contents/React", {data: { title: "Cursos", name: "SIGCTCE"}});
    });
    app.get("/registrocursos", MiddlewareValidSession, (req, res, next)=>{
        res.render("contents/React", {data: { title: "Cursos", name: "SIGCTCE"}});
    });
    app.get("/modificarcursos", MiddlewareValidSession, (req, res, next)=>{
        res.render("contents/React", {data: { title: "Cursos", name: "SIGCTCE"}});
    });
    app.get("/vistacurso", MiddlewareValidSession, (req, res, next)=>{
        res.render("contents/React", {data: { title: "Cursos", name: "SIGCTCE"}});
    });
    app.get("/principal", MiddlewareValidSession, (req, res, next)=>{
        res.render("contents/React", {data: { title: "Cursos", name: "SIGCTCE"}});
    });
    app.get("/regiscurs", MiddlewareValidSession, (req, res, next)=>{
        res.render("contents/React", {data: { title: "Cursos", name: "SIGCTCE"}});
    });
    app.get("/modificarimg", MiddlewareValidSession, (req, res, next)=>{
        res.render("contents/React", {data: { title: "Cursos", name: "SIGCTCE"}});
    });
    app.get("/registrobeneficiarios", MiddlewareValidSession, (req, res, next)=>{
        res.render("contents/React", {data: { title: "Beneficiarios", name: "SIGCTCE"}});
    });
    app.get("/beneficiarios", MiddlewareValidSession, (req, res, next)=>{
        res.render("contents/React", {data: { title: "Beneficiarios", name: "SIGCTCE"}});
    });
    app.get("/modificarbene", MiddlewareValidSession, (req, res, next)=>{
        res.render("contents/React", {data: { title: "Beneficirios", name: "SIGCTCE"}});
    });
    app.get("/registrobeneficiarios2", MiddlewareValidSession, (req, res, next)=>{
        res.render("contents/React", {data: { title: "Beneficirios", name: "SIGCTCE"}});
    });
    app.get("/mostrarbene", MiddlewareValidSession, (req, res, next)=>{
        res.render("contents/React", {data: { title: "Beneficirios", name: "SIGCTCE"}});
    });
    app.get("/user", MiddlewareValidSession, (req, res, next)=>{
        res.render("contents/React", {data: { title: "Usuario", name: "SIGCTCE"}});
    });
    app.get("/principaluser", MiddlewareValidSession, (req, res, next)=>{
        res.render("contents/React", {data: { title: "Usuario", name: "SIGCTCE"}});
    });
    app.get("/modificar", MiddlewareValidSession, (req, res, next)=>{
        res.render("contents/React", {data: { title: "Usuario", name: "SIGCTCE"}});
    });
    app.get("/modificaruser", MiddlewareValidSession, (req, res, next)=>{
        res.render("contents/React", {data: { title: "Usuario", name: "SIGCTCE"}});
    });
    
}