const express = require("express");
const {
  getAllusers,
  addNewUsers,
  loginUsers,
} = require("../controllers/userController");

const router = express.Router();

router.get("/getallusers", getAllusers);
router.post("/addnewUSers", addNewUsers);
router.post("/loginusers", loginUsers);
// router.patch("/editusers/:id", editUsers);
// router.delete("/deleteusers/:id", deleteUsers);

module.exports = router;
