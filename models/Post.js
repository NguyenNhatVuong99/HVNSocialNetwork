const mongoose = require('mongoose')
const Schema = mongoose.Schema

const post = new Schema({
    content: {
        type: String
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    
},
    {
        timestamps: true
    })

module.exports = mongoose.model('Post', post)