const express = require("express");
const router = express.Router();
const { validator, validationRequest } = require("../middleware/validator")
let auth = require("../controller/auth")
let login = auth.loginAuth

 

router.post("/", validator(), validationRequest, login);

module.exports = router;
