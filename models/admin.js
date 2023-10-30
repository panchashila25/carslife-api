
    // models/admin.js

    const mongoose = require('mongoose');

    const Admin = mongoose.model(
      "Admin",
      new mongoose.Schema({
        name:{
          type: String
        },
        email:{
          type: String
        },
        password:{
          type: String
        },
        role:{
          type:String,
          enum:['user','admin','user-1'],
          default:'user'
        },
        
      }, {
        timestamps: true
      })
    );

    module.exports = Admin;
  