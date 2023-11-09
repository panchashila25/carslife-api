
    // models/transaction.js

    const mongoose = require('mongoose');

    const Transaction = mongoose.model(
      "Transaction",
      new mongoose.Schema({
        balance:{
          type:String,
          required:true
        },
        transactionType:{
          type:String,
          enum:['credit','debit'],
          required: true
        },
        date:{
          type:Date,
          required:true
        },
        user:{
         type:mongoose.Schema.Types.ObjectId,
         ref:'User'
        }
      }, {
        timestamps: true
      })
    );

    module.exports = Transaction;
  