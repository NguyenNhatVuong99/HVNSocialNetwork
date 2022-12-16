var express = require('express');
var router = express.Router();
let AdminController = require("../controllers/Frontend/AdminController")

router.get('/', AdminController.index);
router.get('/users', AdminController.user);

// route resource role
// router.group("/roles", (router) => {
//     router.get("/", RoleController.index);
//     router.get("/create", RoleController.create);
//     router.post("/", RoleController.store);
//     router.get("/:id", RoleController.show);
//     router.get("/:id/edit", RoleController.edit);
//     router.put("/:id", RoleController.update);
//     router.delete("/:id", RoleController.destroy);
// });
module.exports = router;
