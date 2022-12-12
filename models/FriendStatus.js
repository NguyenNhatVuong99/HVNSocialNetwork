const mongoose = require('mongoose')
const Schema = mongoose.Schema

const friend_status = new Schema({
    name: {
        type: String
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('friend_status',friend_status)