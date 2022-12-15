let User = require('../models/users')
let index = (req, res) => {
    res.render("index")
    
}
let postIndex = async (req,res) => {
    let users = await User.find({})
    return res.json(users)
}



module.exports = {index, postIndex}