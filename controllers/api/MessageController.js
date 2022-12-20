let Post = require("../../models/Post")
let User = require("../../models/User")
let Message = require("../../models/Message")
let Participant = require("../../models/Participant")
let index = async (req, res) => {
    Message.aggregate([
        {
            $lookup: {
                from: 'users',
                localField: 'user_id',
                foreignField: '_id',
                as: 'user'
            }
        },
    ]).exec((error, data) => {
        if (error) {
            return res.status(400).json({
                error
            })
        }
        res.status(200).json({
            data
        })
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