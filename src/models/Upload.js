const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    images : [String],
    image: String,
})

module.exports = mongoose.model('Upload',uploadSchema);