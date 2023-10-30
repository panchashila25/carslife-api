
      // controllers/adminController.js
      const adminService = require('../services/adminService');

      function adminController(req, res) {
        // Controller logic here
      }
  
      // Create
      adminController.create = async (req, res) => {
        try {
            const data = req.body;
            const admin = await adminService.create(data);
            if(admin){
                res.status(200).send({status:true,message:"admin Created Successfully",data:admin,error:""});
            }
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Read
      adminController.read = async (req, res) => {
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

          const data = await adminService.find(query,page,limit);
          const totalCount = await adminService.countDocument(query);
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
      adminController.update = async (req, res) => {
        try {
          const id = req.params.id;
          const data = req.body;
          const admin = await adminService.update(id,data);
          if(admin){
            res.status(200).send({status:true,message:"admin Updated Successfully",data:admin,error:""});
          }
          
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Delete
      adminController.delete = async (req, res) => {
        try {
          const id = req.params.id;
          const admin = await adminService.delete(id);
          if(admin){
            res.status(200).send({status:true,message:"admin Deleted Successfully",data:[],error:""});
          }
          
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      module.exports = adminController;
    