const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nombre: {type: String, required:true},
    app: {type: String, required:true},
    apm: {type: String, required:true},
    fechaNac:{type: String, required:true},
    edad: {type: String, required:true},
    sexo: {type: String, required:true},
    curp: {type: String, required:true},
    telefono: {type: String, required:true},
    email:{type: String, required:true},
    entidad:{type:String,required:true},
    municipio:{type:String,required:true}, 
    cp:{type:String,required:true}, 
    colonia:{type:String,required:true}, 
    calle:{type:String,required:true}, 
    numExt:{type:String,required:true}, 
    curso:{type:String, required:true},
    fechaReg: {type: Date, default: Date.now}

}); 
module.exports = mongoose.model('registrobeneficiarios', UserSchema);
