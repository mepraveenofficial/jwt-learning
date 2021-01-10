const express = require("express"); 
const router = express.Router();
const { signupAuth } = require("../controller/auth");
const { validator, validationRequest } = require("../middleware/validator")

router.post('/', validator(), validationRequest, signupAuth);

module.exports = router
