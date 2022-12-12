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

const attachment = mongoose.model('attachment', attachmentSchema)
module.exports = { attachment }