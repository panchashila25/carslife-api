// models/user.js

const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema(
    {
      name: {
        type: String,
  
      },
      mobile: {
        type: String,
        
      },
      pickupLocation: {
        type: String,
        required: true,
      },
      dropLocation: {
        type: String,
        required: true,
      },
      pickupdate:{
        type:String,
        required: true,
      },
      dropDate:{
        type:String,
        required:true,
      },
      
      bookings:{
        type:String,
        
      }
    }
    ,{
      timestamps: true,
    }
  )
);

module.exports = User;
