const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    published_year:{
        required: false,
        type: Number
    }
})

module.exports = mongoose.model('Books', dataSchema)