const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    image : String
})

module.exports = mongoose.model('Upload',uploadSchema);