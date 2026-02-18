const Product = require("../model/productModel");

// READ
exports.getAllProducts = async (req, res) => {
  try {
    const productList = await Product.find();
    res.status(200).json(productList);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching products" });
  }
};

// CREATE
exports.addNewProducts = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const product = await Product.create({ name, price, quantity });
    res.status(201).json({ msg: "Success", product });
  } catch (error) {
    res.status(500).json({ msg: "Error creating product" });
  }
};

// UPDATE
exports.editProducts = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    if (!updatedProduct) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ msg: "Error updating product" });
  }
};
// DELETE

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    const mongoose = require("mongoose");
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: "Invalid product ID" });
    }

    // Delete product
    const deleted = await Product.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ msg: "Product not found" });
    }

    // Success response
    res.status(200).json({
      msg: "Product deleted successfully",
      deleted, // optional: shows deleted product info
    });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ msg: "Error deleting product", error: err.message });
  }
};
