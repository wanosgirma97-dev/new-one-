const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://wanosgirma97_db_user:uPxfSXqQhYhlfTHd@cluster0.kjlnnif.mongodb.net/?appName=Cluster0",

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

