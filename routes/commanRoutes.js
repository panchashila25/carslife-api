
      // routes/uploadfileRoutes.js
  
      const express = require('express');
      const router = express.Router();
  
      const commanController = require('../controllers/commanController');
  
      router.post("/upload",commanController.uploadFile);
  router.get("/retrieve/:file",commanController.retrieveFile);
  
      module.exports = router;
    