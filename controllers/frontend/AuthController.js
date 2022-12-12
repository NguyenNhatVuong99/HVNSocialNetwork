
let login = (req, res) => {
	res.render("layout/auth/login")
}

let register = (req, res) => {
	res.render("layout/auth/register")
}

module.exports = { login, register }