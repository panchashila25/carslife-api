
    // services/driverService.js
    const db = require('../models');

    const {driver:Driver,user:User} = db;

    exports.create = async (data) => {
      try {
        data.role = "driver";
        const user =new User(data)
        const saveduser = await user.save()
        data.userId = saveduser._id;
        const driver = new Driver(data);
    
        const saveddriver = await driver.save();
    
        return saveddriver;
      } catch (error) {
        throw error;
      }
    };

    exports.find = async (condition,page,limit) => {
      try {
        const driver = await Driver.find(condition).skip((page - 1) * limit).limit(limit).sort({createdAt:-1}).exec();;
    
        return driver;
      } catch (error) {
        throw error;
      }
    };

    exports.countDocument = async (condition) => {
  try {
  
    const count = await Driver.countDocuments(condition);
    return count;

  } catch (error) {
    throw error;
  }
};

    exports.update = async (id,data) => {
      try {
        const driver = await Driver.findByIdAndUpdate(id,data);
        
        return driver;
      } catch (error) {
        throw error;
      }
    };

    exports.delete = async (id) => {
      try {
        const driver = await Driver.findByIdAndDelete(id);
    
        return true;
      } catch (error) {
        throw error;
      }
    };

    
  