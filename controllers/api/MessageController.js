let Conversation = require("../../models/Conversation")
let User = require("../../models/User")
let Message = require("../../models/Message")
const Pusher = require("pusher");

let index = async (req, res) => {
    Message.find()
        .populate('user_id', '-password')
        .sort('-createdAt')
        .exec((err, messages) => {
            if (err) {
                return res.status(500).json({ success: false, msg: err.message });
            } else if (messages.length === 0) {
                return res.status(404).json({
                    success: false,
                    msg: 'No posts find in the database!',
                });
            }
            res.status(200).json({ success: true, posts: messages });
        });

}

let show = async (req, res) => {

}
let create = async (req, res) => {

}
let store = async (req, res) => {
    const pusher = new Pusher({
        appId: "1529122",
        key: "44e9d951732245c631b5",
        secret: "1b630a54a02fc3b5b403",
        cluster: "ap1",
        useTLS: true
    });
    let { content, conversation_id, friend_id } = req.body
    let newMessage = new Message({
        content,
        conversation_id,
        user_id: req.session.userId
    })
    await newMessage.save()
    let message_id = newMessage._id;
    let updatedAt = newMessage.updatedAt;
    Conversation.findByIdAndUpdate(conversation_id, {
        last_message_id: message_id,
        updatedAt: updatedAt
    },
        function (err, conversation) {
            if (err) {
                console.log(err)
            }
            else {
                // io.emit('message', req.body);
                pusher.trigger("my-channel", "my-event", {
                    user_id:friend_id
                });

                res.status(200).json({ success: true, data: conversation });
            }
        });

}
let edit = async (req, res) => {

}
let update = async (req, res) => {

}
let destroy = async (req, res) => {

}
module.exports = { index, show, create, store, edit, update, destroy }