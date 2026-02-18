const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
});

const Order = new mongoose.model("Order", orderSchema);

module.exports = Order;
