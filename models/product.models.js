const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {    
        name:{type:String, required:true},
        img:{type:String},
        price:{type:Number, required:true},
        category:{type:String, required:true},
    }

)


module.exports = mongoose.model('Product',productSchema)