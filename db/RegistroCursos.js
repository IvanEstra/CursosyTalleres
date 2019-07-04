const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nombrecurso: {type: String, required:true},
    descri: {type: String, required:true},
    ponente: {type: String, required:true},
    sexo: {type: String, required:true},
    time: {type: String, required:true},
    datein:{type: String, required:true},
    datefi: {type: String, required:true},
    area:{type:String, required:true},
    tipo:{type:String, required:true},
    capacity: {type: Number, required:true}  

}); 
module.exports = mongoose.model('registrocursos', UserSchema);