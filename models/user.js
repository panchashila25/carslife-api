
    // models/user.js

    const mongoose = require('mongoose');

    const User = mongoose.model(
      "User",
      new mongoose.Schema({
        
        
      }, {
        timestamps: true
      })
    );

    module.exports = User;
  