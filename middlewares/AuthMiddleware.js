let User = require("../models/User")
/**
 * If the user is logged in, redirect them to the admin page. Otherwise, continue to the next function.
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 * @param next - This is a function that you call when your middleware is complete.
 * @returns the result of the if statement.
 */
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