
    // services/userService.js
    const db = require('../models');

    const {user:User} = db;

    exports.create = async (data) => {
      try {
        const user = new User(data);
    
        const saveduser = await user.save();
    
        return saveduser;
      } catch (error) {
        throw error;
      }
    };

    exports.find = async (condition,page,limit) => {
      try {
        const user = await User.find(condition).skip((page - 1) * limit).limit(limit).sort({createdAt:-1}).exec();;
    
        return user;
      } catch (error) {
        throw error;
      }
    };

    exports.countDocument = async (condition) => {
  try {
  
    const count = await User.countDocuments(condition);
    return count;

  } catch (error) {
    throw error;
  }
};

    exports.update = async (id,data) => {
      try {
        const user = await User.findByIdAndUpdate(id,data);
    
        return user;
      } catch (error) {
        throw error;
      }
    };

    exports.delete = async (id) => {
      try {
        const user = await User.findByIdAndDelete(id);
    
        return true;
      } catch (error) {
        throw error;
      }
    };

    
  