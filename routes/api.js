var express = require('express');
var router = express.Router();
var AuthController = require("../controllers/api/AuthController")
var UserController = require("../controllers/api/UserController")
var PostController = require("../controllers/api/PostController")
var CommentController = require("../controllers/api/CommentController")
var ConversationController = require("../controllers/api/ConversationController")
var MessageController = require("../controllers/api/MessageController")
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
router.group("/posts", (router) => {
    router.get("/", PostController.index);
    router.get("/create", PostController.create);
    router.post("/", PostController.store);
    router.get("/:id", PostController.show);
    router.get("/:id/edit", PostController.edit);
    router.put("/:id", PostController.update);
    router.delete("/:id", PostController.destroy);
});
router.group("/messages", (router) => {
    router.get("/", MessageController.index);
    router.get("/create", MessageController.create);
    router.post("/", MessageController.store);
    router.get("/:id", MessageController.show);
    router.get("/:id/edit", MessageController.edit);
    router.put("/:id", MessageController.update);
    router.delete("/:id", MessageController.destroy);
});
router.group("/comments", (router) => {
    router.get("/", CommentController.index);
    router.get("/create", CommentController.create);
    router.post("/", CommentController.store);
    router.get("/:id", CommentController.show);
    router.get("/:id/edit", CommentController.edit);
    router.put("/:id", CommentController.update);
    router.delete("/:id", CommentController.destroy);
});
router.group("/conversations", (router) => {
    // router.get("/", ConversationController.index);
    // router.get("/:id", ConversationController.index);
    router.get("/user/:id", ConversationController.user);
    router.post("/message", ConversationController.message);
    // router.get("/create", ConversationController.create);
    // router.post("/", ConversationController.store);
    // router.get("/:id", ConversationController.show);
    // router.get("/detail/:id", ConversationController.detail);
    // router.get("/:id/edit", ConversationController.edit);
    // router.put("/:id", ConversationController.update);
    // router.delete("/:id", ConversationController.destroy);
    // router.get("/list", ConversationController.list);

});
module.exports = router;
