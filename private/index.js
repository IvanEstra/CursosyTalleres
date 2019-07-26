const User = require("../db/Usuarios");
const Bene = require("../db/registrobeneficiarios");
const Cursos = require("../db/RegistroCursos");


module.exports = (app) =>{
    //obtener usuarios
    app.get('/getUsers',async (request,response)=>{
        const user = await User.find().sort({fecha: 'desc'});
        return response.json(user);
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

    //Agregar evento
    /*app.post("/events/add", MiddlewareValidSession, async (request, reponse)=>{
        const newEvent=new Event({...request.body })
    })*/
};