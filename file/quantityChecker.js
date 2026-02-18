module.exports = async (req, res, next) => {
  const { quantity } = req.body;

  if (!quantity) {
    return res.status(400).json({ msg: "Quantity is required" });
  }

  if (quantity <= 5) {
    return res
      .status(400)
      .json({ msg: "You cannot send a product less than 5" });
  }

  next();
};
