
    // services/transactionService.js
    const db = require('../models');

    const {transaction:Transaction} = db;

    exports.create = async (data) => {
      try {
        const transaction = new Transaction(data);
    
        const savedtransaction = await transaction.save();
    
        return savedtransaction;
      } catch (error) {
        throw error;
      }
    };

    exports.find = async (condition,page,limit) => {
      try {
        const transaction = await Transaction.find(condition).skip((page - 1) * limit).limit(limit).sort({createdAt:-1}).exec();;
    
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

    
  