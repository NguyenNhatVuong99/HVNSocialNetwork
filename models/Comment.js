const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    post_id: {
        require: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    user_id: {
        require: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('Comment', CommentSchema)