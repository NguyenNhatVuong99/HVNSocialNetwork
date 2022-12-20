let bcrypt = require('bcryptjs');
let { faker } = require('@faker-js/faker/locale/vi');

let User = require('../models/users')
let Friend = require('../models/friends')
let FriendStatus = require('../models/friend_status')
let limit = 100;
let getUser = async () => {
    return await User.find({}, '_id').limit(limit)
}
let getStatus = async () => {
    return await FriendStatus.find({}, '_id').limit(limit)
}

const FriendSeeder = async (req, res,) => {
    let users = await getUser()
    let status = await getStatus()
    for (let index = 0; index < limit; index++) {
        let random = Math.floor(Math.random() * 100)
        let randomStatus = Math.floor(Math.random() * 10)
        let user_id = users[random]['_id']
        let status_id = status[randomStatus]['_id']
        let newFriend = new Friend({
            user_from: user_id,
            user_to: user_id,
            status_id: status_id,
        })
        await newFriend.save()
    }

}

module.exports = { FriendSeeder }