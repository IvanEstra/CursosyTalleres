const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nombre: {type: String, required:true},
    app: {type: String, required:true},
    apm: {type: String, required:true},
    fecha:{type: Date, default:Date.now},
    edad: {type: String, required:true},
    sexo: {type: String, required:true},
    curp: {type: String, required:true},
    tel: {type: String, required:true},
    email:{type: String, required:true}  

}); 
module.exports = mongoose.model('registrobeneficiarios', UserSchema);