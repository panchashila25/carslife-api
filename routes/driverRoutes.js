
      // routes/driverRoutes.js
  
      const express = require('express');
      const router = express.Router();
  
      const driverController = require('../controllers/driverController');
  
      // GET route
      router.post('/get', driverController.read);
  
      // POST route
      router.post('/', driverController.create);
  
      // PUT route
      router.put('/:id', driverController.update);
  
      // DELETE route
      router.delete('/:id', driverController.delete);

      router.get('/count',driverController.countDocument);
      
    
  
      module.exports = router;
    