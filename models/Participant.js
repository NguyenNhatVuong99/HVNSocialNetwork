const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ParticipantSchema = new Schema({
    conversation_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
},
    {
        timestamps: true
    })

const Participant = mongoose.model('Participant', ParticipantSchema)
module.exports = Participant 