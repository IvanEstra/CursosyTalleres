const User = require("../db/Usuarios");
const Bene = require("../db/registrobeneficiarios");
const Cursos = require("../db/RegistroCursos");
const jwt = require("jwt-simple");


module.exports = (app) =>{
    //obtener usuarios
    app.get('/getUsers',async (request,response)=>{
        const user = await User.find().sort({fecha: 'desc'});
        return response.json(user);
    });

    const SECRET = "Gk@em#s$f@NV";
    //Inicio sesion
    app.post("/login", async (request, response) => {
        const query = {email: request.body.email, password: request.body.password};
        const user = await User.findOne(query);
        if(!user) return response.send({ error: "use not found"});
        response.cookie('token', jwt.encode(query, SECRET), {maxAge: 60000 * 60 * 12, httpOnly: true});
        return response.send({success:"OK", level: user.level});
    });

    //cerrar sesion
    app.get('/logout',async (request,response)=>{
        response.cookie('token', "", {maxAge: 0, httpOnly: true});
        return response.redirect("/login");
    });

    //Agregar usuario
    app.post('/user/signup', async (request, response) => {
        const newUser = new User ({...request.body}); //copia request.body
        await newUser.save(); //para que haga a su tiempo
        return response.send({success:"OK"});
    });
    //Editar usuario
    app.put('/user/edit/:id', async (request, response) => {
        await User.findByIdAndUpdate(request.params.id,{...request.body});
        return response.send({success: "OK"})
    });


    //Obtener usuario
     app.get('/getUser/:id', async (request, response) => {
        const user = await User.findById(request.params.id);
        return response.json(user);
    });

    //Eliminar usuario
    app.get('/user/delete/:id', async (request, response) => {
        await User.findByIdAndDelete(request.params.id);
        return response.send({success: "OK"})
    });

////////////////BENEFICIARIOS/////////////////////

     //obtener Beneficiarios
     app.get('/getBenefi',async (request,response)=>{
        const bene = await Bene.find().sort({fecha: 'desc'});
        return response.json(bene);
    });

    //Agregar Beneficiario
    app.post('/beneficiario/signup', async (request, response) => {
        const newBene = new Bene ({...request.body}); //copia request.body
        await newBene.save(); //para que haga a su tiempo
        return response.send({success:"OK"});
    });
    //Editar Beneficiario
    app.put('/beneficiario/edit/:id', async (request, response) => {
        await Bene.findByIdAndUpdate(request.params.id,{...request.body});
        return response.send({success: "OK"})
    });


    //Obtener Beneficiario
     app.get('/getBenefi/:id', async (request, response) => {
        const bene = await Bene.findById(request.params.id);
        return response.json(bene);
    });

    //Eliminar Beneficio
    app.get('/beneficiario/delete/:id', async (request, response) => {
        await Bene.findByIdAndDelete(request.params.id);
        return response.send({success: "OK"})
    });
////////////////CURSOS Y TALLERES/////////////////////

     //obtener Cursos y Talleres
     app.get('/getCursos',async (request,response)=>{
        const cursos = await Cursos.find().sort({fecha: 'desc'});
        return response.json(cursos);
    });

    //Agregar Cursos y Talleres
    app.post('/Cursos/signup', async (request, response) => {
        const newCursos = new Cursos ({...request.body}); //copia request.body
        await newCursos.save(); //para que haga a su tiempo
        await request.files.img.mv("./public/image/cursos/"+newCursos._id+"-curso.png");
        return response.send({success:"OK"});
    });
    //Editar Cursos y Talleres
    app.put('/Cursos/edit/:id', async (request, response) => {
        await Cursos.findByIdAndUpdate(request.params.id,{...request.body});
        return response.send({success: "OK"})
    });


    //Obtener Cursos y Talleres
     app.get('/getCursos/:id', async (request, response) => {
        const cursos = await Cursos.findById(request.params.id);
        return response.json(cursos);
    });

    //Eliminar Cursos y Talleres
    app.get('/Cursos/delete/:id', async (request, response) => {
        await Cursos.findByIdAndDelete(request.params.id);
        return response.send({success: "OK"})
    });

    
};