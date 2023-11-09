      
      // routes/bookingsRoutes.js
  
      const express = require('express');
      const router = express.Router();
  
      const authController = require('../controllers/authController');
  
      // GET route
      router.post('/authenticate', authController.authenticate);
  
      // POST route
      router.post('/register', authController.register);
      
      router.post('/sendOTP', authController.sendOTP);

      router.post('/sendOTPs', authController.sendOTPs);

      module.exports = router;
    
    