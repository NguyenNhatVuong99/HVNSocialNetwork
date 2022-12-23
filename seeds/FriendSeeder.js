let bcrypt = require('bcryptjs');
let { faker } = require('@faker-js/faker/locale/vi');

let User = require('../models/User')
let Friend = require('../models/Friend')
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
let getUsers = async () => {
    let user = await getUser()
    try {
        return await User.find({ _id: { $ne: user["_id"] } }, "_id")
            .limit(limit)
    } catch (error) {
        console.log(error);
    }
}
const Seeder = async (req, res,) => {
    let user = await getUser()
    let users = await getUsers()
    for (let index = 0; index < limit; index++) {
        let arr = [user["_id"]];
        arr.push(users[index]['_id'])
        let newFriend = new Friend({
            users: arr
        })
        // await newFriend.save()
    }
}

module.exports = { Seeder }