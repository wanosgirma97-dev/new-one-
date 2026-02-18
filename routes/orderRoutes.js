const express = require("express");

const {
  getAllOrders,
  createOrders,
} = require("../controllers/orderController");

const router = express.Router();

router.get("/getallorders", getAllOrders);
router.post("/createorders", createOrders);
// router.patch("/editproduct/:id", editProducts);
// router.delete("/deleteproduct/:id", deleteProduct);

module.exports = router;
