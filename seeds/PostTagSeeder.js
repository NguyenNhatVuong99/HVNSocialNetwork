let bcrypt = require('bcryptjs');
let { faker } = require('@faker-js/faker/locale/vi');

let User = require('../models/users')
let PostTag = require('../models/post_tags')
let Post = require('../models/posts')
let limit = 100;
let getUser = async () => {
    return await User.find({}, '_id').limit(limit)
}
let getPost = async () => {
    return await Post.find({}, '_id').limit(limit)
}

const PostTagSeeder = async (req, res,) => {
    let users = await getUser()
    let post = await getPost()
    for (let index = 0; index < limit; index++) {
        let random = Math.floor(Math.random() * 100)
        let user_id = users[random]['_id']
        let post_id = post[random]['_id']
        let newPostTag = new PostTag({
            post_id: post_id,
            user_id: user_id,
        })
        await newPostTag.save()
    }

}

module.exports = { PostTagSeeder }