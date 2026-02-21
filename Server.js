const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((err) => {
    console.error("DB Connection Error:", err);
  });

app.get("/", (req, res) => {
  res.send("Server is running!");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});