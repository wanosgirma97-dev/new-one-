//step 1: mongoose import
//step 2: user schema create
//step 3: user model crate
const mongoose = require("mongoose");
const { type } = require("node:os");

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required:true
  },
  phone: {
    type: String,
    required: true
  },
  rele: {
    type: String,
    enum: ["Admin","Custemer","Editor"],
    required: true
  },
  password: {

  type: String,
  required: true
  },
  age: {
    type: Number,
    required: false
  },


},
 {timestamps: true }


);

 const User = mongoose.model("user",userSchema);
 
 
