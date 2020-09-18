const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    image : {
        type : String,
        required : [true,'Please add a image'],
    }
})

module.exports = mongoose.model('Upload',uploadSchema);