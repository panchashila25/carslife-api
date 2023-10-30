
      // controllers/authController.js
      const authService = require('../services/authService');

      function authController(req, res) {
        // Controller logic here
      }
  
      // Create
      authController.create = async (req, res) => {
        try {
            const data = req.body;
            const auth = await authService.create(data);
            if(auth){
                res.status(200).send({status:true,message:"auth Created Successfully",data:auth,error:""});
            }
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Read
      authController.read = async (req, res) => {
        try {
          const condition = req.body || {};
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 25;
    const searchTerm = req.query.searchTerm;
    let query = {};

    if (condition) {
      query = condition;
    }

    if (searchTerm) {
      query.$text = { $search: searchTerm };
    }

          const data = await authService.find(query,page,limit);
          const totalCount = await authService.countDocument(query);
          res.status(200).send({
      data,
      page,
      totalPages: Math.ceil(totalCount / limit),
      totalItems: totalCount,
    });
          
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Update
      authController.update = async (req, res) => {
        try {
          const id = req.params.id;
          const data = req.body;
          const auth = await authService.update(id,data);
          if(auth){
            res.status(200).send({status:true,message:"auth Updated Successfully",data:auth,error:""});
          }
          
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Delete
      authController.delete = async (req, res) => {
        try {
          const id = req.params.id;
          const auth = await authService.delete(id);
          if(auth){
            res.status(200).send({status:true,message:"auth Deleted Successfully",data:[],error:""});
          }
          
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      module.exports = authController;
    