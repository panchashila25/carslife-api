
      // routes/uploadfileRoutes.js
  
      const express = require('express');
      const router = express.Router();
  
      const commanController = require('../controllers/commanController');
  
      router.post("/upload",commanController.uploadFile);
  router.get("/retrieve/:file",commanController.retrieveFile);
  router.get("/searchPlaces",commanController.searchPlaces);
  
      module.exports = router;
    