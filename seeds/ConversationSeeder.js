let { faker } = require('@faker-js/faker/locale/vi');

let User = require('../models/User')
let Conversation = require('../models/Conversation');
let Message = require("../models/Message")
const { get } = require('mongoose');
let limit = 30;
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
    let user = await getUser()
    try {
        return await User.find({ _id: { $ne: user["_id"] } }, "_id")
            .limit(limit)
    } catch (error) {
        console.log(error);
    }
}
let getConversation = async () => {
    return await Conversation.find({})
}
const Seeder = async (req, res,) => {
    // let user = await getUser()
    // let user2 = await getUser2()
    // let users = await getUsers()
    // let arr = [user["_id"], user2["_id"]];
    // let newConver = new Conversation({
    //     users: arr
    // })
    // await newConver.save()
    // for (let index = 1; index < limit; index++) {
    //     let updatedAt = faker.date.between('2022-11-01T00:00:00.000Z', '2022-12-18T00:00:00.000Z')
    //     console.log(updatedAt);
    //     let arr = [user["_id"]];
    //     arr.push(users[index]['_id'])
    //     let newConver = new Conversation({
    //         users: arr,
    //         updatedAt:updatedAt
    //     })
    //     await newConver.save()
    // }
    let conversations = await getConversation()
    conversations.forEach(item => {
        let conver_id = item['_id'];
        Message.find({ "conversation_id": conver_id }, "_id", (err, message) => {
            Conversation.findByIdAndUpdate(conver_id, {
                last_message_id: message[29]
            },
                function (err, docs) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log("Updated User : ", docs);
                    }
                });
        })
    });
}

module.exports = { Seeder }