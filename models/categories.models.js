const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema(
    {   img:{type:String},
        title:{type:String, required:true},
        cat:{type:String, required:true},
    }

)


module.exports = mongoose.model('Categories',categoriesSchema)