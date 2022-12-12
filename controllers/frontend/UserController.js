let newfeed = (req, res) => {
    res.render("layout/user/newfeed")
}
let profile = (req, res) => {
    res.render("layout/user/profile")
}
module.exports = { newfeed, profile }