
    // services/adminService.js
    const db = require('../models');

    const {admin:Admin} = db;

    exports.create = async (data) => {
      try {
        const admin = new Admin(data);
    
        const savedadmin = await admin.save();
    
        return savedadmin;
      } catch (error) {
        throw error;
      }
    };

    exports.find = async (condition,page,limit) => {
      try {
        const admin = await Admin.find(condition).skip((page - 1) * limit).limit(limit).sort({createdAt:-1}).exec();;
    
        return admin;
      } catch (error) {
        throw error;
      }
    };

    exports.countDocument = async (condition) => {
  try {
  
    const count = await Admin.countDocuments(condition);
    return count;

  } catch (error) {
    throw error;
  }
};

    exports.update = async (id,data) => {
      try {
        const admin = await Admin.findByIdAndUpdate(id,data);
    
        return admin;
      } catch (error) {
        throw error;
      }
    };

    exports.delete = async (id) => {
      try {
        const admin = await Admin.findByIdAndDelete(id);
    
        return true;
      } catch (error) {
        throw error;
      }
    };

    
  