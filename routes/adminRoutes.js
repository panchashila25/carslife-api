
      // routes/adminRoutes.js
  
      const express = require('express');
      const router = express.Router();
  
      const adminController = require('../controllers/adminController');
  
      // GET route
      router.post('/get', adminController.read);
  
      // POST route
      router.post('/', adminController.create);
  
      // PUT route
      router.put('/:id', adminController.update);
  
      // DELETE route
      router.delete('/:id', adminController.delete);
  
      module.exports = router;
    