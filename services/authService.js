
    // services/authService.js
    const db = require('../models');

    const {auth:Auth} = db;

    exports.create = async (data) => {
      try {
        const auth = new Auth(data);
    
        const savedauth = await auth.save();
    
        return savedauth;
      } catch (error) {
        throw error;
      }
    };

    exports.find = async (condition,page,limit) => {
      try {
        const auth = await Auth.find(condition).skip((page - 1) * limit).limit(limit).sort({createdAt:-1}).exec();;
    
        return auth;
      } catch (error) {
        throw error;
      }
    };

    exports.countDocument = async (condition) => {
  try {
  
    const count = await Auth.countDocuments(condition);
    return count;

  } catch (error) {
    throw error;
  }
};

    exports.update = async (id,data) => {
      try {
        const auth = await Auth.findByIdAndUpdate(id,data);
    
        return auth;
      } catch (error) {
        throw error;
      }
    };

    exports.delete = async (id) => {
      try {
        const auth = await Auth.findByIdAndDelete(id);
    
        return true;
      } catch (error) {
        throw error;
      }
    };

    
  