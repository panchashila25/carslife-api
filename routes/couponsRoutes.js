
      // routes/couponsRoutes.js
  
      const express = require('express');
      const router = express.Router();
  
      const couponsController = require('../controllers/couponsController');
  
      // GET route
      router.post('/get', couponsController.read);
  
      // POST route
      router.post('/', couponsController.create);
  
      // PUT route
      router.put('/:id', couponsController.update);
  
      // DELETE route
      router.delete('/:id', couponsController.delete);
  
      module.exports = router;
    