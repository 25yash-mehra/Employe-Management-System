let express = require("express")
let router = express.Router()
let {createUser , loginData} = require("../control/Usercontroll")


router.route("/signup").post(createUser)
router.route("/").post(loginData)
module.exports = router 