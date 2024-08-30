let express = require("express");
let router = express.Router();
let manageemployee = require("../control/Empdata");

router.route("/manageemployee")
.post(manageemployee.employeData)
.get(manageemployee.findemp)

router.route("/manageemployee/:id").delete(manageemployee.deletItem)
module.exports = router;
 