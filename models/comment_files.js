const mongoose = require('mongoose')
const Schema = mongoose.Schema


const comment_file = new Schema({
    comment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    },
    file_url: {
        type: String
    },

},
    {
        timestamps: true
    })

module.exports = mongoose.model('Comment_file', comment_file)