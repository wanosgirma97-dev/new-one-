const express = require("express");
const {
  getAllProducts,
  addNewProducts,
  editProducts,
  deleteProduct,
  AddProduct,
} = require("../controllers/productController");
const checkQuantity = require("../file/quantityChecker");

const router = express.Router();

router.get("/getallproducts", getAllProducts);
router.post("/addNewproducts", checkQuantity, addNewProducts);
router.patch("/editproduct/:id", editProducts);
router.delete("/deleteproduct/:id", deleteProduct);
router.delete("/addProduct", AddProduct)

module.exports = router;