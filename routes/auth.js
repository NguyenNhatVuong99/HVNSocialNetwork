var express = require('express');
var router = express.Router();
var AuthMiddleware = require("../middlewares/AuthMiddleware")
var AuthController = require("../controllers/Frontend/AuthController")

/* GET home page. */
router.get('/login', AuthController.login);
router.get('/register', AuthController.register);
module.exports = router;
