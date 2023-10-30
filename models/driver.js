
    // models/driver.js

    const mongoose = require('mongoose');

    const Driver = mongoose.model(
      "Driver",
      new mongoose.Schema({
        profile:{
          type:String,
          required:true
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
        personalDocument:[{
          licenseno:{
            type:String,
            required:true
          },
          licenseDoc:{
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
          }
        }
        ],
        carDocument:[{
          carName:{
            type:String,
            required:true
          },
          carNo:{
            type:String,
            required:true
          },
          carDoc:{
            type:String,
            required:true
          }
        }]
      }, {
        timestamps: true
      })
    );

    module.exports = Driver;
  