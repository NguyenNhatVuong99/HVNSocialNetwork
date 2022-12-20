let User = require("../../models/User")
let index = async (req, res) => {
    let data = await User.find({})
    res.status(200).json({
        data
    })
}
let show = async (req, res) => {
    let id = req.params.id
    try {
        let user = await User.findOne({_id:id})
        res.status(200).json({
            user
        })
    } catch (error) {
        res.status(400).json({
            error
        })
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