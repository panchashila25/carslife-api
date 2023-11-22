
    // models/bookings.js

    const mongoose = require('mongoose');

    const Bookings = mongoose.model(
      "Bookings",
      new mongoose.Schema({
        coupons:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Coupons",
          },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
        
        driver:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Driver",
          },
      
        fromDate:{
          type:Date,
          type:String
        },
        toDate:{
          type:Date,
      
        },
        pickupLocation:{
          type:String,
  
        },
        dropLocation:{
          type:String,
        
        },
        totalFare:{
          type:String
        },
        status:{
          type:String,
          enum:["pending","approve"],
          default:"pending"
        },
        bookingId:{
          type:String,
        
        }
        

        
      }, {
        timestamps: true
      })
    );

    module.exports = Bookings;
  