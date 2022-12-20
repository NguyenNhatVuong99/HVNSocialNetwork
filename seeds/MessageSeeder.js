let { faker } = require('@faker-js/faker/locale/vi');

let User = require('../models/User')
let Message = require('../models/Message')
let Conversation = require('../models/Conversation')
let limit = 5;
let skip = 20;
let getUser = async () => {
    try {
        return await User.findOne({
            email: 'nhatvuong99@gmail.com'
        }, '_id')

    } catch (error) {
        console.log(error);
    }
}
let getUsers = async () => {
    try {
        let user = getUser()
        return await User.find({ user_id: { $ne: user["_id"] } }, "_id")
            .skip(skip)
            .limit(limit)
    } catch (error) {
        console.log(error);
    }
}
let getConversation = async () => {
    return await Conversation.find({}, '_id')
}

let Seeder = async (req, res,) => {
    let user = await getUser()
    let users = await getUsers()
    let conversations = await getConversation()
    for (let index = 0; index < limit; index++) {
        let conver_id = conversations[index]['_id']
        let newMessage = new Message({
            conversation_id: conver_id,
            user_id: user['_id'],
            content: faker.lorem.sentences(2),
            createdAt: faker.date.between('2022-11-01T00:00:00.000Z', '2022-12-18T00:00:00.000Z')
        })
        await newMessage.save()
    }
    for (let index = 0; index < users.length; index++) {
        let k = index + 5
        let conver_id = conversations[k]['_id']
        let newMessage = new Message({
            conversation_id: conver_id,
            user_id: users[index]['_id'],
            content: faker.lorem.sentences(2),
            createdAt: faker.date.between('2022-11-01T00:00:00.000Z', '2022-12-18T00:00:00.000Z')
        })
        await newMessage.save()
    }

}

module.exports = { Seeder }