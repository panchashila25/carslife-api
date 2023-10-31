
    // models/driver.js

    const mongoose = require('mongoose');

    const Driver = mongoose.model(
      "Driver",
      new mongoose.Schema({
        profile:{
          type:String,
    
        },
        name:{
          type:String,
          required:true
        },
        mobile:{
          type:String,
          required:true
        },
        email:{
          type:String,
          required:true
        },
        password:{
          type:String,
          required:true
        },
        carCategory:{
          type:String,
          required:true
        },
        age:{
          type:String,
          required:true
        },
        licenseno:{
          type:String,
          required:true
        },
        personalDocument:{
            type:String,
            required:true
        },
        govId:{
          type:String,
          required:true
        },
        address:{
          type:String,
          required:true
        },
        carName:{
          type:String,
          required:true
        },
        carNo:{
          type:String,
          required:true
        },
        carDocument:{
            type:String,
            required:true
          }
      }, {
        timestamps: true
      })
    );

    module.exports = Driver;
  