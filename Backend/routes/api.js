const express = require("express");
const router = express.Router();
const user = require("../Controllers/user")
const email = require("../Controllers/sendemail")
const dataemail = require("../Controllers/dataemail")

router.post("/productdata",user.productController)
router.get("/products",user.getAllProducts); 
router.post("/EmailformData", email.queremailController);
// router.post("/sendemail", dataemail.dataemailController);
router.post("/sendemail",dataemail.queremailController)

module.exports = router;