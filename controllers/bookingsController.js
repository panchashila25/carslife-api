
      // controllers/bookingsController.js
      const Driver = require('../models/driver');
const bookingsService = require('../services/bookingsService');

      function bookingsController(req, res) {
        // Controller logic here
      }
  
      // Create
      bookingsController.create = async (req, res) => {
        try {
            const data = req.body;
            const bookings = await bookingsService.create(data);
            if(bookings){
                res.status(200).send({status:true,message:"bookings Created Successfully",data:bookings,error:""});
            }
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Read
      bookingsController.read = async (req, res) => {
        try {
          const condition = req.body || {};
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 25;
    const searchTerm = req.query.searchTerm;
    let query = {};
          console.log(req.body)
    if (condition) {
      query = condition;
      if(query.driver!=''){
        const data = await Driver.findOne({userId:query.driver});
        query.driver=data._id
      }
    }

    if (searchTerm) {
      query.$text = { $search: searchTerm };
    }
          const data = await bookingsService.find(query,page,limit);
          const totalCount = await bookingsService.countDocument(query);
          res.status(200).send({
      data,
      page,
      totalPages: Math.ceil(totalCount / limit),
      totalItems: totalCount,
    });
          
        } catch (error) {
          console.log(error)
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Update
      bookingsController.update = async (req, res) => {
        try {
          const id = req.params.id;
          const data = req.body;
          console.log(req.body)
          const bookings = await bookingsService.update(id,data);
          if(bookings){
            res.status(200).send({status:true,message:"bookings Updated Successfully",data:bookings,error:""});
          }
          
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Delete
      bookingsController.delete = async (req, res) => {
        try {
          const id = req.params.id;
          const bookings = await bookingsService.delete(id);
          if(bookings){
            res.status(200).send({status:true,message:"bookings Deleted Successfully",data:[],error:""});
          }
          
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      module.exports = bookingsController;
    