
    // models/coupons.js

    const mongoose = require('mongoose');

    const Coupons = mongoose.model(
      "Coupons",
      new mongoose.Schema({
        couponCode:{
          type:String,
          required:true
        },
        couponName:{
          type:String,
          required:true
        },
        discount:{
          type:String,
          required:true
        },
        
        fromDate:{
          type:Date,
          required:true
        },
        toDate:{
          type:Date,
          required:true
        
      }
    },
       {
        timestamps: true
      })
    );

    module.exports = Coupons;
  