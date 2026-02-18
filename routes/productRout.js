const express = require("express");
const {
  getAllProducts,
  addNewProducts,
  editProducts,
  deleteProduct,
} = require("../controllers/productController");
const checkQuantity = require("../file/quantityChecker");

const router = express.Router();

router.get("/getallproducts", getAllProducts);
router.post("/addnewproducts", checkQuantity, addNewProducts);
router.patch("/editproduct/:id", editProducts);
router.delete("/deleteproduct/:id", deleteProduct);

module.exports = router;
