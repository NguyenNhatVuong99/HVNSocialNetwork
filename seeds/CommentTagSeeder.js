let bcrypt = require('bcryptjs');
let { faker } = require('@faker-js/faker/locale/vi');

let User = require('../models/users')
let Comment = require('../models/comments')
let CommentTag = require('../models/comment_tag')
let limit = 100;
let getUser = async () => {
    return await User.find({}, '_id').limit(limit)
}
let getComment = async () => {
    return await Comment.find({}, '_id').limit(limit)
}

const CommentTagSeeder = async (req, res,) => {
    let users = await getUser()
    let cmt = await getComment()
    for (let index = 0; index < limit; index++) {
        let random = Math.floor(Math.random() * 100)
        let user_id = users[random]['_id']
        let cmt_id = cmt[random]['_id']
        let newCommentTag = new CommentTag({
            comment_id: cmt_id,
            user_id: user_id,
        })
        await newCommentTag.save()
    }

}

module.exports = { CommentTagSeeder }