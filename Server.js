const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://2mahletfantahun_db_user:ALYjg9doofdjQ8KL@cluster0.fazg5lp.mongodb.net/class_project?appName=Cluster0",
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error("DB Connection Error:", err));

// Middleware
app.use(express.json());
app.use(express.json({ extended: false }));

// Routes
app.use("/product", require("./routes/productRout"));
app.use("/user", require("./routes/userRoute"));
app.use("/order", require("./routes/orderRoutes"));

// Start server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
app.get("/", (req, res) => {
  res.send("Server is running on port 5000! ");
});
