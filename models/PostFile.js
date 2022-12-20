const mongoose = require('mongoose')
const Schema = mongoose.Schema

const post_file = new Schema({
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    file_url: {
        type: String
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('Post_file', post_file)