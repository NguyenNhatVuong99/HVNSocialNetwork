const mongoose = require('mongoose')
const Schema = mongoose.Schema

const comment_react = new Schema({
    comment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    },
    react_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'React'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('Comment_react', comment_react)