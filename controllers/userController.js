const bcrypt = require("bcrypt");
const User = require("../model/userModel");

// READ
exports.getAllusers = async (req, res) => {
  try {
    const userList = await User.find();
    res.status(200).json(userList);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching products" });
  }
};

// CREATE
exports.addNewUsers = async (req, res) => {
  try {
    const { name, password } = req.body;
    const checkUser = req.body;
    const Userlist = await User.findOne({ name: checkUser.name });
    if (Userlist) {
      return res.status(500).json({ msg: "User Found with the same name" });
    }
    const salt = await bcrypt.genSalt(10);
    const passwordEncrypt = await bcrypt.hash(password, salt);
    const user = await User.create({ name, password: passwordEncrypt });
    res.status(201).json({ msg: "Success", user });
  } catch (error) {
    res.status(500).json({ msg: "Error creating user" });
  }
};

// LOG IN
exports.loginUsers = async (req, res) => {
  try {
    const { name, password } = req.body;
    // const loginUser = req.body;
    const Userlist = await User.findOne({ name: name });

    if (!Userlist) {
      return res.status(404).json({ msg: "User Not Found" });
    }

    const isMatch = await bcrypt.compare(password, Userlist.password);
    if (!isMatch) {
      return res.status(401).jeson({ msg: "Wrong Password" });
    }
    return res
      .status(500)
      .json({ msg: "User Found and logged in successfully", Userlist });
  } catch (error) {
    res.status(500).json({ msg: "Error in log in" });
  }
};

// UPDATE
// exports.editUsers = async (req, res) => {
//   try {
//     const updatedProduct = await Product.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true },
//     );

//     if (!updatedProduct) {
//       return res.status(404).json({ msg: "Product not found" });
//     }

//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ msg: "Error updating product" });
//   }
// };
// // DELETE

// exports.deleteProduct = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Validate ObjectId
//     const mongoose = require("mongoose");
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ msg: "Invalid product ID" });
//     }

//     // Delete product
//     const deleted = await Product.findByIdAndDelete(id);

//     if (!deleted) {
//       return res.status(404).json({ msg: "Product not found" });
//     }

//     // Success response
//     res.status(200).json({
//       msg: "Product deleted successfully",
//       deleted, // optional: shows deleted product info
//     });
//   } catch (err) {
//     console.error("Delete error:", err);
//     res.status(500).json({ msg: "Error deleting product", error: err.message });
//   }
// };
