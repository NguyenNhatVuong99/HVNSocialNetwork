const mongoose = require('mongoose')
const Schema = mongoose.Schema

const participantSchema = new Schema({
    conversation_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    type:{
        type: String,
        enum:["couple","group"],
        default: "couple"
    }

},
    {
        timestamps: true
    })

module.exports = mongoose.model('Participant', participantSchema)