
      // routes/transactionRoutes.js
  
      const express = require('express');
      const router = express.Router();
  
      const transactionController = require('../controllers/transactionController');
  
      // GET route
      router.post('/get', transactionController.read);
  
      // POST route
      router.post('/', transactionController.create);
  
      // PUT route
      router.put('/:id', transactionController.update);
  
      // DELETE route
      router.delete('/:id', transactionController.delete);
  
      module.exports = router;
    