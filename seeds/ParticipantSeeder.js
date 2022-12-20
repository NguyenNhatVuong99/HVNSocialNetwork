let User = require('../models/User')
let Participant = require('../models/Participant')
let Conversation = require('../models/Conversation')
let limit = 5;
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
        let user =await getUser()
        return await User.find({
            _id: { $ne: user["_id"] }
        }).limit(limit)
    } catch (error) {
        console.log(error);
    }
}
let getConver = async () => {
    try {
        return await Conversation.find({}, '_id')
    } catch (error) {
        console.log(error);
    }
}

let Seeder = async (req, res,) => {
    let users = await getUsers()
    let user = await getUser()
    let conversations = await getConver()
    for (let index = 0; index < users.length; index++) {
        let user_id = users[index]['_id']
        let conver_id = conversations[index]['_id']
        let newParti = new Participant({
            conversation_id: conver_id,
            user_id: user_id,
        })
        await newParti.save()
    }
    for (let index = 0; index < limit; index++) {
        let k = index+5
        let conver_id = conversations[k]['_id']
        let newParti = new Participant({
            conversation_id: conver_id,
            user_id: user['_id'],
        })
        await newParti.save()
    }
    
}

module.exports = { Seeder }