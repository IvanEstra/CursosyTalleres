const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, required:true},
    app: {type: String, required:true},
    apm: {type: String, required:true},
    edad: {type: String, required:true},
    sexo: {type: String, required:true},
    tel: {type: String, required:true},
    email:{type: String, required:true},
    password:{type:String, required:true},
    area:{type:String, required:true},
    level:{ type: String},
    active: {type: String, required:true}
  

}); 
module.exports = mongoose.model('usuarios', UserSchema);