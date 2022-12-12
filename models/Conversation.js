const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ConversationSchema = new Schema({
    title: {
        type: String
    },
    user_id:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

},

    {
        timestamps: true
    })


const Conversation = mongoose.model('Conversation', ConversationSchema)
module.exports = Conversation