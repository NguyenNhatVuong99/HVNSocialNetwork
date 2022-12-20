let Post = require("../../models/Post")
let User = require("../../models/User")
let Comment = require("../../models/Comment")
let index = async (req, res) => {

}

let show = async (req, res) => {

}
let create = async (req, res) => {

}
let store = async (req, res) => {
    const { content, user_id, post_id } = req.body;
    const newComment = new Comment({
        content,
        user_id,
        post_id: post_id,
    });
    newComment
        .save()
        .then((comment) => {
            Post.findByIdAndUpdate(
                post_id,
                { $push: { comments: comment._id } },
                { new: true, useFindAndModify: false },
                (err, post) => {
                    if (err) {
                        return res.status(500).json({ success: false, msg: err.message });
                    }
                    res.status(200).json({ success: true, comment });
                }
            );
        })
        .catch((err) => {
            res.status(500).json({ success: false, msg: err.message });
        });
}
let edit = async (req, res) => {

}
let update = async (req, res) => {

}
let destroy = async (req, res) => {

}
module.exports = { index, show, create, store, edit, update, destroy }