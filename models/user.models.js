const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
Name:{type:String, required:true},
Lastname:{type:String},
Userame:{type:String},
Email:{type:String, required:true, unique: true},
Password:{type:String},
Confirm_Password:{type:String},
CreatedAt:{type:Date, default:new Date()},
Role:{type:String,default:'guest'}
    }

)


module.exports = mongoose.model('User',userSchema)
