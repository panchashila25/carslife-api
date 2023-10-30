
    // services/couponsService.js
    const db = require('../models');

    const {coupons:Coupons} = db;

    exports.create = async (data) => {
      try {
        const coupons = new Coupons(data);
    
        const savedcoupons = await coupons.save();
    
        return savedcoupons;
      } catch (error) {
        throw error;
      }
    };

    exports.find = async (condition,page,limit) => {
      try {
        const coupons = await Coupons.find(condition).skip((page - 1) * limit).limit(limit).sort({createdAt:-1}).exec();;
    
        return coupons;
      } catch (error) {
        throw error;
      }
    };

    exports.countDocument = async (condition) => {
  try {
  
    const count = await Coupons.countDocuments(condition);
    return count;

  } catch (error) {
    throw error;
  }
};

    exports.update = async (id,data) => {
      try {
        const coupons = await Coupons.findByIdAndUpdate(id,data);
    
        return coupons;
      } catch (error) {
        throw error;
      }
    };

    exports.delete = async (id) => {
      try {
        const coupons = await Coupons.findByIdAndDelete(id);
    
        return true;
      } catch (error) {
        throw error;
      }
    };

    
  