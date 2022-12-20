let index = (req, res) => {
    return res.render('layout/admin/index')
}
let user = (req, res) => {
    return res.render('layout/admin/user')
}
let post = (req, res) => {
    return res.render('layout/admin/post')
}
let message = (req, res) => {
    return res.render('layout/admin/message')
}
module.exports = { index, user, post, message }