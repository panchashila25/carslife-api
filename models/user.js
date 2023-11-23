// models/user.js

const mongoose = require("mongoose");
const { user } = require(".");

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
      email: {
        type: String,
      },
      
      role:{
        type:String,
        enum:['user','admin','driver'],
        default:'user'
      },
      walletBalance:{
        type:Number,
        default:0

      },
      pickupLocation: {
        type: String,
      },
      dropLocation: {
        type: String,
      },
      pickupdate:{
        type:String,
      },
      dropDate:{
        type:String,
      },
      
      bookings:{
        type:String,
        
      },
      pickuplatitude:{
        type:String
      },
      pickuplongitude:{
        type:String
      },
      droplatitude:{
        type:String
      },
      droplongitude:{
        type:String
      },
    }
    ,{
      timestamps: true,
    }
  )
);

module.exports = User;
