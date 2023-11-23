
      // controllers/driverController.js
      const driverService = require('../services/driverService');

      function driverController(req, res) {
        // Controller logic here
      }
  
      // Create
      driverController.create = async (req, res) => {
        try {
            const data = req.body;
            const driver = await driverService.create(data);
            if(driver){
                res.status(200).send({status:true,message:"driver Created Successfully",data:driver,error:""});
            }
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Read
      driverController.read = async (req, res) => {
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

          const data = await driverService.find(query,page,limit);
          const totalCount = await driverService.countDocument(query);
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
      driverController.update = async (req, res) => {
        try {
          const id = req.params.id;
          const data = req.body;
          const driver = await driverService.update(id,data);
          console.log(driver)
          if(driver){
            res.status(200).send({status:true,message:"driver Updated Successfully",data:driver,error:""});
          }
          
        } catch (error) {
    
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Delete
      driverController.delete = async (req, res) => {
        try {
          const id = req.params.id;
          const driver = await driverService.delete(id);
          if(driver){
            res.status(200).send({status:true,message:"driver Deleted Successfully",data:[],error:""});
          }
          
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };

      driverController.countDocument=async (req,res)=>{
        try{
          const driver=await driverService.countDocument()
          if(driver){
            res.status(200).send({status:true,message:"driver Deleted Successfully",data:[],error:""});
          }
        }
        catch(error){
          res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
        
      }
  
      module.exports = driverController;
    