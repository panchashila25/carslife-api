
    // models/transaction.js

    const mongoose = require('mongoose');

    const Transaction = mongoose.model(
      "Transaction",
      new mongoose.Schema({
        balance:{
          type:Number,
          required:true
        },
        transactionType:{
          type:String,
          enum:['credit','debit'],
          // required: true
        },
        discription:{
          type:String
        },
        driver:{
         type:mongoose.Schema.Types.ObjectId,
         ref:'Driver',
         required:true
        }
      }, {
        timestamps: true
      })
    );

    module.exports = Transaction;
  