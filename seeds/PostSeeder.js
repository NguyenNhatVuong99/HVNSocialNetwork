const mongoose = require("mongoose");
const User = require('../models/User')
const Post = require('../models/Post')
const Comment = require("../models/Comment")
let { faker } = require('@faker-js/faker/locale/vi');

let limit = 100;
let getUser = async () => {
    return await User.find({}, '_id').limit(limit)
}

const Seeder = async (req, res,) => {
    let users = await getUser()
    for (let index = 0; index < limit; index++) {
        var post_id = mongoose.Types.ObjectId();
        let arr= []
        for (let j = 0; j < 5; j++) {
            var cmt_id = mongoose.Types.ObjectId();
            let random = Math.floor(Math.random() * limit)
            const newComment = new Comment({
                _id: cmt_id,
                content: faker.random.words(5),
                user_id: users[random]['_id'],
                post_id,
            });
            await newComment.save();
            arr.push(cmt_id)
        }
        let random = Math.floor(Math.random() * limit)
        let user_id = users[random]["_id"]
        let index = Math.floor(Math.random() * 5)+1
        let newPost = new Post({
            _id : post_id,
            content: faker.lorem.sentences(index),
            user_id: user_id,
            file_url: faker.image.image(),
            comments:arr,
            createdAt:faker.date.between('2022-11-01T00:00:00.000Z', '2022-12-18T00:00:00.000Z')
        })
        await newPost.save()
    }
}

module.exports = { Seeder }