var express = require('express');
var router = express.Router();
var AuthController = require("../controllers/api/AuthController")
var UserController = require("../controllers/api/UserController")
/* GET users listing. */

router.post("/login", AuthController.login)
router.post("/register", AuthController.register)
router.get("/logout", AuthController.logout)
router.group("/users", (router) => {
    router.get("/", UserController.index);
    router.get("/create", UserController.create);
    router.post("/", UserController.store);
    router.get("/:id", UserController.show);
    router.get("/:id/edit", UserController.edit);
    router.put("/:id", UserController.update);
    router.delete("/:id", UserController.destroy);
});
module.exports = router;
