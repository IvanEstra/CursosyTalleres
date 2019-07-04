const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser"); //variable donde se puede almacenar lo que sea
const json2xls = require('json2xls'); // convertir un archivo json a excel
const fileUpload = require("express-fileupload"); //cargar archivos al servidor


const AllowAccesProvitional = (req,res,next) =>{ //REQ= conjunto para que guarde al servidor RES=respuesta NEXT=siguiente
    res.header("Access-Control-Allow-Origin", "*");//todos van a ser peticiones
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');//son los metodos para usar peticiones
    res.header('Access-Control-Allow-Headers', 'Content-Type'); //varidad de archivos que se mandan
    next();
};

module.exports = (app) =>{
    app.use(AllowAccesProvitional);
    app.use(bodyParser.urlencoded({extended:true, limit: '50mb'}));
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(cookieParser());
    app.use(json2xls.middleware);
    app.use(fileUpload({
        limit: {fileSize: 50 * 1024 *1024},
    }));
};

//este es el servidor