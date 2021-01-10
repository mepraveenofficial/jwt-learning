const express = require("express");
const { userData } = require("../controller/profile");
const router = express.Router();
const { verifyToken} = require("../middleware/verifyJWT")

router.get("/", verifyToken, userData);

module.exports = router;
