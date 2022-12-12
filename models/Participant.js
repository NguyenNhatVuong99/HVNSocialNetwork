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

},
    {
        timestamps: true
    })

const Participant = mongoose.model('Participant', participantSchema)
module.exports = { Participant }