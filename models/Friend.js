const mongoose = require('mongoose')
const Schema = mongoose.Schema

const friend = new Schema({
    user_from: {
        type: String
    },
    user_to: {
        type: String
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