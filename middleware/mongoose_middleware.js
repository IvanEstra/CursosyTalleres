const mongoose = require('mongoose'); //mongoose es un conector para insertar
module.exports = (app) =>{
    mongoose.connect('mongodb://localhost:27017/Cursos');
};