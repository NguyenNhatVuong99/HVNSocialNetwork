const mongoose = require('mongoose')
const Schema = mongoose.Schema

const comment = new Schema({
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    reply_to: {
        type: String
    },
    content: {
        type: String
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('Comment', comment)