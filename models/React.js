const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReactSchema = new Schema({
    title: {
        type: String
    },
    content: {
        type: String
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('React', ReactSchema)