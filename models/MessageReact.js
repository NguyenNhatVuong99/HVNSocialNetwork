const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messages_react = new Schema({
    message_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    },
    react_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'React'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Messages_react', messages_react)