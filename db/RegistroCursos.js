const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nombrecurso: {type: String, required:true},
    descri: {type: String, required:true},
    ponente: {type: String, required:true},
    resena: {type: String, required:true},
    time: {type: String, required:true},
    datein:{type: String, required:true},
    datefi: {type: String, required:true},
    area:{type:String, required:true},
    tipo:{type:String, required:true},
    capacity: {type: Number, required:true},
    date: {type: Date,default:Date.now}

}); 
module.exports = mongoose.model('registrocursos', UserSchema);