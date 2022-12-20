let Conversation = require("../../models/Conversation");
let Message = require("../../models/Message");
let Participant = require("../../models/Participant")
let User = require("../../models/User")

let index = async (req, res) => {
    let current_id = res.locals.currentUser;
    return res.status(200).json({
        current_id
    })
}
let show = async (req, res) => {
    let current_id = req.params.id
    try {
        let conver1 = await Conversation.find({ user_id: current_id }, "_id")
        let arrConver1 = []
        for (let item of conver1) {
            arrConver1.push(item._id)
        }
        let list1 = await Participant.find().where('conversation_id').in(arrConver1)
        let parti2 = await Participant.find({ user_id: current_id }, "conversation_id")
        let arrParti2 = []
        for (let item of parti2) {
            arrParti2.push(item.conversation_id)
        }
        let list2 = await Conversation.find().where("_id").in(arrParti2)
        let result = []
        for (let item of list1) {
            let user = await User.findOne({ _id: item.user_id })
            let message = await Message.find({ conversation_id: item.conversation_id })
                .sort({ "createdAt": 1 })
            let object = {
                conversation_id: item.conversation_id,
                user_id: item.user_id,
                user: user,
                message: message[0]
            }
            result.push(object)
        }
        for (let item of list2) {
            let user = await User.findOne({ _id: item.user_id })
            let message = await Message.find({ conversation_id: item.conversation_id })
                .sort({ "created_at": 1 })
            let object = {
                conversation_id: item._id,
                user_id: item.user_id,
                user: user,
                message: message[0]
            }
            result.push(object)
        }
        console.log(result);
        return res.status(200).json({ result })

    } catch (error) {
        return res.status(400).json({ error })
    }
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