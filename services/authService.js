
    // services/authService.js
    const db = require('../models');

    const {user:User} = db;
  
    exports.register = async (userData) => {
      try {
        const newUser = new User(userData);
    
        const savedUser = await newUser.save();
    
        return savedUser;
      } catch (error) {
        throw error;
      }
    };
    
    exports.authenticate = async (mobile) => {
      try {
        const user = await User.findOne({mobile: mobile});
        console.log(user);
        if(user)
          return user;
        else
          return false;
        
    
      } catch (error) {
        console.log(error)
        throw error;
      }
    };
    
    
    // changes

    const {admin:Admin} = db;
  

    exports.login = async (adminData) => {
      try {
        const newAdmin = new Admin(adminData);
    
        const savedadmin = await newAdmin.save();
    
        return savedAdmin;
      } catch (error) {
        throw error;
      }
    };
    
    exports.login = async (email) => {
      try {
        const admin = await Admin.findOne({email: Email});
        console.log(admin);
        if(admin)
          return admin;
        else
          return false;
        
    
      } catch (error) {
        console.log(error)
        throw error;
      }
    };
    
    
    
  