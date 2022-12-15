const mongoose = require('mongoose')
const Schema = mongoose.Schema

const post_react = new Schema({
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
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

module.exports = mongoose.model('Post_react', post_react)