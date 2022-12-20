const User = require('../models/User')
const Post = require('../models/Post')
let { faker } = require('@faker-js/faker/locale/vi');

let limit = 100;
let getUser = async () => {
    return await User.find({}, '_id').limit(limit)
}

const Seeder = async (req, res,) => {
    let users = await getUser()
    for (let index = 0; index < limit; index++) {
        let random = Math.floor(Math.random() * limit)
        let id = users[random]["_id"]
        let index = Math.floor(Math.random() * 5)+1
        let newPost = new Post({
            content: faker.lorem.sentences(index),
            user_id: id,
            file_url: faker.image.image(),
            createdAt:faker.date.between('2022-11-01T00:00:00.000Z', '2022-12-18T00:00:00.000Z')
        })
        await newPost.save()
    }
}

module.exports = { Seeder }