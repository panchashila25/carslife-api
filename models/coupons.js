
    // models/coupons.js

    const mongoose = require('mongoose');

    const Coupons = mongoose.model(
      "Coupons",
      new mongoose.Schema({

        
      }, {
        timestamps: true
      })
    );

    module.exports = Coupons;
  