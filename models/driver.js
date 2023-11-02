
    // models/driver.js

    const mongoose = require('mongoose');

    const Driver = mongoose.model(
      "Driver",
      new mongoose.Schema({
  
        name:{
          type:String,
          required:true
        },
        gender:{
          type:String,
          required:true
        },
        dob:{
          type:String,
          required:true
        },
        age:{
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
        licenseno:{
          type:String,
          required:true
        },
        aadharCardNo:{
          type:String,
          required:true
        },
        address:{
          type:String,
          required:true
        },
        state:{
          type:String,
          required:true
        },
        city:{
          type:String,
          required:true
        },
        policeverifyDoc:{
          type:String,
          required:true
        },
        brandName:{
          type:String,
          required:true
        },
        modelName:{
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
          },
          purchesYear:{
            type:String,
            required:true
          },
          photo:{
            type:String,
            required:true
          },
      }, {
        timestamps: true
      })
    );

    module.exports = Driver;
  