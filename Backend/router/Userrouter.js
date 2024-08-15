let express = require("express")
let router = express.Router()
let {createUser , loginData, manageemployee} = require("../control/Usercontroll")


router.route("/signup").post(createUser)
router.route("/manageemployee").post(manageemployee)
router.route("/").post(loginData)
module.exports = router 