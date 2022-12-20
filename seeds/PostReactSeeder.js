let bcrypt = require('bcryptjs');
let { faker } = require('@faker-js/faker/locale/vi');

let User = require('../models/users')
let PostReact = require('../models/post_react')
let Post = require('../models/posts')
let React = require('../models/reacts')
let limit = 100;
let getUser = async () => {
    return await User.find({}, '_id').limit(limit)
}
let getPost = async () => {
    return await Post.find({}, '_id').limit(limit)
}
let getReact = async () => {
    return await React.find({}, '_id').limit(limit)
}

const PostReactSeeder = async (req, res,) => {
    let users = await getUser()
    let post = await getPost()
    let react = await getReact()
    for (let index = 0; index < limit; index++) {
        let randomReact = Math.floor(Math.random() * 7)
        let random = Math.floor(Math.random() * 100)
        let user_id = users[random]['_id']
        let post_id = post[random]['_id']
        let react_id = react[randomReact]["_id"]
        let newPostReact = new PostReact({
            post_id: post_id,
            react_id: react_id,
            user_id: user_id,
        })
        await newPostReact.save()
    }

}

module.exports = { PostReactSeeder }