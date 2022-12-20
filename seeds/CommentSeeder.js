let bcrypt = require('bcryptjs');
let { faker } = require('@faker-js/faker/locale/vi');

let User = require('../models/User')
let Comment = require('../models/Comment')
let Post = require('../models/Post')
let limit = 90;
let getUser = async () => {
    return await User.find({}, '_id').limit(limit)
}
let getPost = async () => {
    return await Post.find().limit(limit)
}

const Seeder = async (req, res,) => {
    let users = await getUser()
    let posts = await getPost()
    for (let index = 0; index < 10; index++) {
        let random = Math.floor(Math.random() * 20)
        let user_id = users[random]['_id']
        let post_id = posts[index]['_id']
        let content = faker.random.words(5)
        const newComment = new Comment({
            content,
            user_id,
            post_id: post_id,
        });
        await newComment
            .save()
            .then((comment) => {
                Post.findByIdAndUpdate(
                    post_id,
                    { $push: { comments: comment._id } },
                    { new: true, useFindAndModify: false },
                ),
                (err, post) => {
                    if (err) {
                        return res.status(500).json({ success: false, msg: err.message });
                    }
                }
            })
    }

}

module.exports = { Seeder }