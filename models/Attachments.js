const mongoose = require('mongoose')
const Schema = mongoose.Schema

const attachmentSchema = new Schema({
    message_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'messages'
    },
    file_url: {
        type: String
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model('attachment', attachmentSchema)