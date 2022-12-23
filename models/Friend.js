const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FriendSchema = new Schema({
    users:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
},
    {
        timestamps: true
    })
module.exports = mongoose.model('Friend', FriendSchema)