
    // models/admin.js

    const mongoose = require('mongoose');

    const Admin = mongoose.model(
      "Admin",
      new mongoose.Schema({
        

        
      }, {
        timestamps: true
      })
    );

    module.exports = Admin;
  