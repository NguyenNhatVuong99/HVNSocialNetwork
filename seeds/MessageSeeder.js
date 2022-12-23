let { faker } = require('@faker-js/faker/locale/vi');

let User = require('../models/User')
let Message = require('../models/Message')
let Conversation = require('../models/Conversation')
let limit = 30;
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
let getUser2 = async () => {
    try {
        return await User.findOne({
            email: 'doannhat@gmail.com'
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
    return await Conversation.find({})
}

let Seeder = async (req, res,) => {
    let conversations = await getConversation()
    conversations.forEach(item => {
        for (let index = 0; index < limit; index++) {
            let createdAt = faker.date.between('2022-11-01T00:00:00.000Z', '2022-12-18T00:00:00.000Z')
            let user_id = (index % 2 == 0) ? item['users'][0] : item['users'][1]
            let newMessage = new Message({
                conversation_id: item['_id'],
                user_id: user_id,
                content: faker.lorem.sentences(2),
                createdAt: createdAt,
                updatedAt:createdAt
            })
            newMessage.save()
        }
    });

}

module.exports = { Seeder }