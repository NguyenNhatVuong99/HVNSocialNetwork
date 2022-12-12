let router = require('express').Router();
require('express-group-routes');
let AuthMiddleware = require("../middlewares/AuthMiddleware")
router.use('/api/v1',require("./api"))
router.use('/auth',AuthMiddleware.verified,require("./auth"))
router.use('/admin',AuthMiddleware.unverified,AuthMiddleware.roleAdmin,require("./admin"))
router.use('/',AuthMiddleware.unverified,require("./user"))

module.exports = router ;
