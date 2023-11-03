// models/user.js

const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema(
    {
      profile: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      mobile: {
        type: String,
        required: true,
      },
      email: {
        type: String,
      },
       address: {
        type: String,
      },
      govId: {
        type: String,
        required: true,
      },
      pickUp: {
        type: String,
        required: true,
      },
      drop: {
        type: String,
        required: true,
      },
      location:{
        type:String,
        required:true,
      },
      bookings:{
        type:String,
        required:true,
      }
    }
    ,{
      timestamps: true,
    }
  )
);

module.exports = User;
