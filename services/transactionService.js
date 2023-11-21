
    // services/transactionService.js
    const db = require('../models');


    const {transaction:Transaction,
          user:User } = db;

    exports.create = async (data) => {
      try {

        const transaction = new Transaction(data);
        const savedtransaction = await transaction.save();
        let user=await User.findById(data.driver);
        let walletBalances=0;
        console.log(data);
        if(data.transactionType=="credit"){
          walletBalances=parseInt(user.walletBalance)+parseInt(data.balance)
        }
        else if(data.Transaction=='debit'){
          walletBalances=parseInt(user.walletBalance)-parseInt(data.balance)
        }



        const transactions = await User.findByIdAndUpdate(data.driver,{$set :{walletBalance:walletBalances}});
        
        return savedtransaction;
      } catch (error) {
        throw error;
      }
    };

    exports.find = async (condition,page,limit) => {
      try {
        const transaction = await Transaction.find(condition).skip((page - 1) * limit).limit(limit).sort({createdAt:-1}).exec();
    
        return transaction;
      } catch (error) {
        throw error;
      }
    };

    exports.countDocument = async (condition) => {
  try {
  
    const count = await Transaction.countDocuments(condition);
    return count;

  } catch (error) {
    throw error;
  }
};

    exports.update = async (id,data) => {
      try {
        const transaction = await Transaction.findByIdAndUpdate(id,data);
    
        return transaction;
      } catch (error) {
        throw error;
      }
    };

    exports.delete = async (id) => {
      try {
        const transaction = await Transaction.findByIdAndDelete(id);
    
        return true;
      } catch (error) {
        throw error;
      }
    };

    
  