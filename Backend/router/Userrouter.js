let express = require("express")
let router = express.Router()
let createUser = require("../control/Usercontroll")


router.route("/signup").post(createUser)

module.exports = router