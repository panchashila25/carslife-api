
    // models/user.js

    const mongoose = require('mongoose');

    const User = mongoose.model(
      "User",
      new mongoose.Schema({
        profile:{
          type:String,
        
        },
        name:{
          type:String,
          required:true
        }
        ,
        mobile:{
          type:String,
          required:true
        },
        email:{
          type:String,
          required:true
        },
        age:{
          type:String,
          required:true
        },
      
          address:{
            type:String,
            required:true
          },
          govId:{
            type:String,
            required:true
          },
          pickUp:{
            type:String,
            required:true
          },
          drop:{
            type:String,
            required:true
          }
      
        
        
        
      }, {
        timestamps: true
      })
    );

    module.exports = User;
  