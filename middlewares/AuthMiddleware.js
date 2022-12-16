let User = require("../models/User")
let verified = async (req, res, next) => {
    if (req.session.userId) {
        let currentUser = await User.findById(req.session.userId)
        let url = (currentUser.role == "admin") ? "admin" : "";
        return res.redirect(`/${url}`)
    }
    next()
}
let unverified = async (req, res, next) => {
    if (!req.session.userId) {
        return res.redirect("/auth/login")
    }
    let currentUser = await User.findById(req.session.userId)
    res.locals.currentUser = currentUser
    next()
}
let roleAdmin = async (req, res, next) => {
    if (res.locals.currentUser.role != "admin") {
        return res.render("layout/user/404")
    }
    next()
}
module.exports = { verified, unverified, roleAdmin }