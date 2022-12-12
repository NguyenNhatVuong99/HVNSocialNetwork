const mongoose = require('mongoose')
const Schema = mongoose.Schema


const messages = new Schema({
    participant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Participant'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    type: {
        type: String
    },
    content: {
        type: String
    },
},
    {
        timestamps: true
    });

module.exports = mongoose.model('message',messages)