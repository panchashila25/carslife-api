
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
        licenseDoc:{
          type:String,
          required:true
        },
        aadharCardNo:{
          type:Number,
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
        pincode:{
          type:Number,
          required:true
        },
        city:{
          type:String,
          required:true
        },
        policeverifyDoc:{
          type:String,
          required:false
          
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
            type:Date,
            required:true
          },
        
          photo:{
            type:String,
            required:true
          },
          PackageKm:{
            type:Number,
            
          },
          ratePerKm:{
            type:Number,
            required:true
          },
          packagePrice:{
            type:Number,
            required:true
          },
          userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
          },
      }, {
        timestamps: true
      })
    );

    module.exports = Driver;
  