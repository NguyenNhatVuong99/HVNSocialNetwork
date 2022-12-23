const mongoose = require("mongoose");
let Conversation = require("../../models/Conversation");
let Message = require("../../models/Message");
let Participant = require("../../models/Participant")
let User = require("../../models/User")

let user = async (req, res) => {
    let current_id = req.params.id

    Conversation.find({ users: current_id })
        .populate('users', '-password')
        .populate('last_message_id')
        .sort('-updatedAt')
        .exec((err, conversations) => {
            if (err) {
                return res.status(500).json({ success: false, msg: err.message });
            } else if (conversations.length === 0) {
                return res.status(404).json({
                    success: false,
                    msg: 'No conversations find in the database!',
                });
            }
            // console.log(conversations);
            res.status(200).json({ success: true, conversations: conversations });
        });
}
let message = async (req, res) => {
    let { conversation_id, user_id } = req.body
    try {
        let messages = await Message.find({ conversation_id: conversation_id })
            .populate('user_id', '-password')
            .sort({ "createdAt": 1 })
        let user = await User.findOne({ _id: user_id }).select('-password')
        return res.status(200).json({
            success: true,
            data: { messages, user }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: error
        })
    }
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
module.exports = { user, message, create, store, edit, update, destroy }