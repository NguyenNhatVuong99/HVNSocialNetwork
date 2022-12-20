let bcrypt = require('bcryptjs');
let { faker } = require('@faker-js/faker/locale/vi');

let User = require('../models/users')
let Comment = require('../models/comments')
let CommentFile = require('../models/comment_files')
let limit = 100;
let getUser = async () => {
    return await User.find({}, '_id').limit(limit)
}
let getComment = async () => {
    return await Comment.find({}, '_id').limit(limit)
}

const CommentFileSeeder = async (req, res,) => {
    let users = await getUser()
    let comment = await getComment()
    for (let index = 0; index < limit; index++) {
        let random = Math.floor(Math.random() * 100)
        let user_id = users[random]['_id']
        let comment_id = comment[random]['_id']
        let newCommentFile = new CommentFile({
            comment_id: comment_id,
            file_url: "uploading",
        })
        await newCommentFile.save()
    }

}

module.exports = { CommentFileSeeder }