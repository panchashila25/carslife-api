
      // controllers/userController.js
      const userService = require('../services/userService');

      function userController(req, res) {
        // Controller logic here
      }
  
      // Create
      userController.create = async (req, res) => {
        try {
            const data = req.body;
            const user = await userService.create(data);
            if(user){
                res.status(200).send({status:true,message:"user Created Successfully",data:user,error:""});
            }
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Read
      userController.read = async (req, res) => {
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

          const data = await userService.find(query,page,limit);
          const totalCount = await userService.countDocument(query);
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
      userController.update = async (req, res) => {
        try {
          const id = req.params.id;
          const data = req.body;
          const user = await userService.update(id,data);
          if(user){
            res.status(200).send({status:true,message:"user Updated Successfully",data:user,error:""});
          }
          
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Delete
      userController.delete = async (req, res) => {
        try {
          const id = req.params.id;
          const user = await userService.delete(id);
          if(user){
            res.status(200).send({status:true,message:"user Deleted Successfully",data:[],error:""});
          }
          
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      module.exports = userController;
    