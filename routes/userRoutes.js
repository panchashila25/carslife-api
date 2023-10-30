
      // routes/userRoutes.js
  
      const express = require('express');
      const router = express.Router();
  
      const userController = require('../controllers/userController');
  
      // GET route
      router.post('/get', userController.read);
  
      // POST route
      router.post('/', userController.create);
  
      // PUT route
      router.put('/:id', userController.update);
  
      // DELETE route
      router.delete('/:id', userController.delete);
  
      module.exports = router;
    