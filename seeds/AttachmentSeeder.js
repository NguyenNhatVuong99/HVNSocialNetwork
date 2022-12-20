const bcrypt = require('bcryptjs');
let { faker } = require('@faker-js/faker/locale/vi');

const Message = require('../models/messages')
const Attachment = require('../models/attachments')
let limit = 100;
let getMessage = async () => {
    return await Message.find({}, '_id').limit(limit)
}

const AttachSeeder = async (req, res) => {
    let message = await getMessage()
    for (let index = 0; index < limit; index++) {
        let random = Math.floor(Math.random() * 100)
        let mess_id = message[random]['_id']
        let newAttach = new Attachment({
            message_id: mess_id,
            file_url: "uploading"
        })
        await newAttach.save()
    }

}

module.exports = { AttachSeeder }