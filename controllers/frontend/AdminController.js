let index = (req, res) => {
	return res.render('layout/admin/index')
}
let user = (req, res) => {
	return res.render('layout/admin/user')
}
module.exports = { index,user }