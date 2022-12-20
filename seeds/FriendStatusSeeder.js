const bcrypt = require('bcryptjs');
let { faker } = require('@faker-js/faker/locale/vi');

const FriendStatus = require('../models/friend_status')
let limit = 10;


const FriendStatusSeeder = async (req, res,) => {
    for (let index = 0; index < limit; index++) {
        let newFriendStatus = new FriendStatus({
            name: "uploading"
        })
        await newFriendStatus.save()
    }
}

module.exports = { FriendStatusSeeder }