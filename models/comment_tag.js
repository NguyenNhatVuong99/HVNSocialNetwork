const mongoose = require('mongoose')
const Schema = mongoose.Schema


const comment_tag = new Schema({
    comment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('Comment_tag', comment_tag)