const express = require("express");
const User = require("../model/userModel");


//Acount creator api
exports.Create = async (req,res)=>{
  try {
    const {name, phone, password, role, age } = rq.body;
    //make sure there is no account with this phone number
    const Usercheck = user.find({phone,phone});
    
    const User = await User.Create({name,phone,password,role, age,})
    res.send(User)
    } catch (error) {
      res.send(error)
    
  }
}

//
