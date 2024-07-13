let express = require("express")
let createUser = require('../control/Usercontroll')
let router = express.Router()

router.route("/create_user").post(createUser)
module.exports = router