let { faker } = require('@faker-js/faker/locale/vi');

let User = require('../models/User')
let Conversation = require('../models/Conversation');
const { get } = require('mongoose');
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
    let user = await getUser()
    try {
        return await User.find({ _id: { $ne: user["_id"] } }, "_id")
                        .skip(skip)
                        .limit(limit)
    } catch (error) {
        console.log(error);
    }
}
const Seeder = async (req, res,) => {
    let user = await getUser()
    let users = await getUsers()
    for (let index = 0; index < limit; index++) {
        let id = user['_id']
        let newConver = new Conversation({
            user_id: id
        })
        await newConver.save()
    }
    for (let index = 0; index < users.length; index++) {
        let id = users[index]['_id']
        let newConver = new Conversation({
            user_id: id
        })
        await newConver.save()
    }
}

module.exports = { Seeder }