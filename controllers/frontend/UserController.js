let User = require("../../models/User")
let newfeed = (req, res) => {
    res.render("layout/user/newfeed")
}
let messages = (req, res) => {
    res.render("layout/user/messages")
}
module.exports = { newfeed, messages }