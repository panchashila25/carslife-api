
    // models/auth.js

    const mongoose = require('mongoose');

    const Auth = mongoose.model(
      "Auth",
      new mongoose.Schema({
       
        
      }, {
        timestamps: true
      })
    );

    module.exports = Auth;
  