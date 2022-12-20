let Post = require("../../models/Post")
let User = require("../../models/User")
let Comment = require("../../models/Comment")
let index = async (req, res) => {
    Post.find()
        .populate('user_id', '-password')
        .populate({
            path: 'comments',
            populate: {
                path: 'user_id'
            }
        })
        .sort('-createdAt')
        .exec((err, posts) => {
            if (err) {
                return res.status(500).json({ success: false, msg: err.message });
            } else if (posts.length === 0) {
                return res.status(404).json({
                    success: false,
                    msg: 'No posts find in the database!',
                });
            }
            res.status(200).json({ success: true, posts: posts });
        });
}
let show = async (req, res) => {

}
let create = async (req, res) => {

}
let store = async (req, res) => {

}
let edit = async (req, res) => {

}
let update = async (req, res) => {

}
let destroy = async (req, res) => {

}
module.exports = { index, show, create, store, edit, update, destroy }