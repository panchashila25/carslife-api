      
      // routes/bookingsRoutes.js
  
      const express = require('express');
      const router = express.Router();
  
      const authController = require('../controllers/authController');
      module.exports = function (app) {
            app.use(function (req, res, next) {
                res.header("Access-Control-Allow-Headers","x-access-token, Origin, Content-Type, Accept");
                next();
            });
            
        }
      // GET route
      router.post('/authenticate', authController.authenticate);
  
      router.post('/login', authController.login);

      // POST route
      router.post('/register', authController.register);
      
      router.post('/sendOTP', authController.sendOTP);

      router.post('/sendOTPs', authController.sendOTPs);

     
      router.post('/email', authController.email);

      router.post('/password', authController.password);


      

      module.exports = router;
    
    