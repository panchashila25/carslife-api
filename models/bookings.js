
    // models/bookings.js

    const mongoose = require('mongoose');

    const Bookings = mongoose.model(
      "Bookings",
      new mongoose.Schema({

        
      }, {
        timestamps: true
      })
    );

    module.exports = Bookings;
  