
      // routes/authRoutes.js
  
      const express = require('express');
      const router = express.Router();
  
      const authController = require('../controllers/authController');
  
      // GET route
      router.post('/get', authController.read);
  
      // POST route
      router.post('/', authController.create);
  
      // PUT route
      router.put('/:id', authController.update);
  
      // DELETE route
      router.delete('/:id', authController.delete);
  
      module.exports = router;
    