const mongoose = require('mongoose')
const Schema = mongoose.Schema

const post_tag = new Schema({
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

},
    {
        timestamps: true
    })

module.exports = mongoose.model("Post_tag", post_tag)