const express = require("express");
const {Create} = require("../controller/userController");
const router = express.Router();

router.post ("/usercrate/",Create);

module.exports = router;
