
    // services/bookingsService.js
    const db = require('../models');

    const {bookings:Bookings} = db;

    exports.create = async (data) => {
      try {
        const bookings = new Bookings(data);
    
        const savedbookings = await bookings.save();
    
        return savedbookings;
      } catch (error) {
        throw error;
      }
    };

    exports.find = async (condition,page,limit) => {
      try {
        const bookings = await Bookings.find(condition).populate("driver").populate("user").skip((page - 1) * limit).limit(limit).sort({createdAt:-1}).exec();;
    
        return bookings;
      } catch (error) {
        throw error;
      }
    };

    exports.countDocument = async (condition) => {
  try {
  
    const count = await Bookings.countDocuments(condition);
    return count;

  } catch (error) {
    throw error;
  }
};

    exports.update = async (id,data) => {
      try {
        const bookings = await Bookings.findByIdAndUpdate(id,data);
        return bookings;
      } catch (error) {
        throw error;
      }
    };

    exports.delete = async (id) => {
      try {
        const bookings = await Bookings.findByIdAndDelete(id);
    
        return true;
      } catch (error) {
        throw error;
      }
    };

    
  