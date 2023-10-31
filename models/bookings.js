
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
          type:String
        },
        location:{
          type:String,
          required:true
        },
        dropAddress:{
          type:String,
          required:true
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
  