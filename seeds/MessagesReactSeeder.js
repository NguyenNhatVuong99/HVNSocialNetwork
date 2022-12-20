let bcrypt = require('bcryptjs');
let { faker } = require('@faker-js/faker/locale/vi');

let User = require('../models/users')
let MessageReact = require('../models/messages_react')
let Message = require('../models/messages')
let React = require('../models/reacts')
let limit = 100;
let getUser = async () => {
    return await User.find({}, '_id').limit(limit)
}
let getMessage = async () => {
    return await Message.find({}, '_id').limit(limit)
}
let getReact = async () => {
    return await React.find({}, '_id').limit(limit)
}

const MessageReactSeeder = async (req, res,) => {
    let users = await getUser()
    let mess = await getMessage()
    let react = await getReact()
    for (let index = 0; index < limit; index++) {
        let randomReact = Math.floor(Math.random() * 7)
        let random = Math.floor(Math.random() * 100)
        let user_id = users[random]['_id']
        let mess_id = mess[random]['_id']
        let react_id = react[randomReact]["_id"]
        let newMessageReact = new MessageReact({
            message_id: mess_id,
            react_id: react_id,
            user_id: user_id,
        })
        await newMessageReact.save()
    }

}

module.exports = { MessageReactSeeder }