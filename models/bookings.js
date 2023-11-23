
    // models/bookings.js

    const mongoose = require('mongoose');

    const Bookings = mongoose.model(
      "Bookings",
      new mongoose.Schema({
        location:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Location",
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
          type:String
        },
        pickupLocation:{
          type:String,
  
        },
        dropLocation:{
          type:String,
        
        },
        bookingId:{
          type:String,
          required:true
        }
        

        
      }, {
        timestamps: true
      })
    );

    module.exports = Bookings;
  