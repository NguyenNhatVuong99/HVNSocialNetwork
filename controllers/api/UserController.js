let User = require("../../models/User")
let index = async (req, res) => {
    let data = await User.find({})
    res.status(200).json({
        data
    })
    // let numDocument = 10; // số lượng xuất hiện trong 1 page
    // let page = req.params.page || 1;
    // let currentIndex = (numDocument * page) - numDocument + 1;
    // await User.find()
    //     .skip((numDocument * page) - numDocument)
    //     .limit(numDocument)
    //     .exec((err, users) => {
    //         User.countDocuments((err, count) => {
    //             if (err) return res.status(400).json({ err })
    //             return res.status(200).json({
    //                 users,
    //                 currentIndex,
    //                 currentPage: page, // page hiện tại
    //                 totalPage: Math.ceil(count / numDocument) // tổng số trang
    //             })

    //         })
    //     })
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