let bcrypt = require('bcryptjs');
let { faker } = require('@faker-js/faker/locale/vi');

let User = require('../models/users')
let CommentReact = require('../models/comment_reacts')
let Comment = require('../models/comments')
let React = require('../models/reacts')
let limit = 100;
let getUser = async () => {
    return await User.find({}, '_id').limit(limit)
}
let getComment = async () => {
    return await Comment.find({}, '_id').limit(limit)
}
let getReact = async () => {
    return await React.find({}, '_id').limit(limit)
}

const CommentReactSeeder = async (req, res,) => {
    let users = await getUser()
    let comment = await getComment()
    let react = await getReact()
    for (let index = 0; index < limit; index++) {
        let randomReact = Math.floor(Math.random() * 7)
        let random = Math.floor(Math.random() * 100)
        let user_id = users[random]['_id']
        let cmt_id = comment[random]['_id']
        let react_id = react[randomReact]["_id"]
        let newCommentReact = new CommentReact({
            comment_id: cmt_id,
            react_id: react_id,
            user_id: user_id,
        })
        await newCommentReact.save()
    }

}

module.exports = { CommentReactSeeder }