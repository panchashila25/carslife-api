
    // models/driver.js

    const mongoose = require('mongoose');

    const Driver = mongoose.model(
      "Driver",
      new mongoose.Schema({

        
      }, {
        timestamps: true
      })
    );

    module.exports = Driver;
  