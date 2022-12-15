const mongoose = require('mongoose')
const Schema = mongoose.Schema

const friend = new Schema({
    user_from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    user_to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Friend_status'
    },

},
    {
        timestamps: true
    })
module.exports = mongoose.model('Friend', friend)