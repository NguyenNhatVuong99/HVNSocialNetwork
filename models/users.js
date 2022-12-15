const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
    },
    first_name: {
        type: String,
        require: true,
    },
    last_name: {
        type: String,
        require: true,
    },
    avatar: {
        type: String,
        require: true,
    },
    cover: {
        type: String,
        require: true,
    },
    birthday: {
        type: Date,
        require: true,
    },
    friend_count: {
        type: Number,
        require: true,
    },
    is_active: {
        type: Boolean,
        require: true,
    }
},
    {
        timestamps: true
    })


const User = mongoose.model('User', UserSchema)
module.exports = User