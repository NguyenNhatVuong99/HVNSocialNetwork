var express = require('express');
var router = express.Router();
var AuthMiddleware = require("../middlewares/AuthMiddleware")
var AuthController = require("../controllers/Frontend/AuthController")
var UserController = require("../controllers/FrontEnd/UserController")

/* GET home page. */
router.get('/', UserController.newfeed);
router.get("/messages",UserController.messages)
module.exports = router;
