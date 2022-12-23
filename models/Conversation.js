const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ConversationSchema = new Schema({
    title: {
        type: String
    },
    type: {
        type: String,
        enum : ['couple','group'],
        default:'couple'
    },
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    last_message_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    },
},

    {
        timestamps: true
    })


const Conversation = mongoose.model('Conversation', ConversationSchema)
module.exports = Conversation