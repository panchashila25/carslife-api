
      // routes/bookingsRoutes.js
  
      const express = require('express');
      const router = express.Router();
  
      const bookingsController = require('../controllers/bookingsController');
  
      // GET route
      router.post('/get', bookingsController.read);
  
      // POST route
      router.post('/', bookingsController.create);
  
      // PUT route
      router.put('/:id', bookingsController.update);
  
      // DELETE route
      router.delete('/:id', bookingsController.delete);
  
      module.exports = router;
    