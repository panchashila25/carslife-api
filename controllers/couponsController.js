
      // controllers/couponsController.js
      const couponsService = require('../services/couponsService');

      function couponsController(req, res) {
        // Controller logic here
      }
  
      // Create
      couponsController.create = async (req, res) => {
        try {
            const data = req.body;
            const coupons = await couponsService.create(data);
            if(coupons){
                res.status(200).send({status:true,message:"coupons Created Successfully",data:coupons,error:""});
            }
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Read
      couponsController.read = async (req, res) => {
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

          const data = await couponsService.find(query,page,limit);
          const totalCount = await couponsService.countDocument(query);
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
      couponsController.update = async (req, res) => {
        try {
          const id = req.params.id;
          const data = req.body;
          const coupons = await couponsService.update(id,data);
          if(coupons){
            res.status(200).send({status:true,message:"coupons Updated Successfully",data:coupons,error:""});
          }
          
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Delete
      couponsController.delete = async (req, res) => {
        try {
          const id = req.params.id;
          const coupons = await couponsService.delete(id);
          if(coupons){
            res.status(200).send({status:true,message:"coupons Deleted Successfully",data:[],error:""});
          }
          
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      module.exports = couponsController;
    