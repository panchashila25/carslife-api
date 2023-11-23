
      // controllers/transactionController.js
      const { driver } = require('../models');
const transactionService = require('../services/transactionService');

      function transactionController(req, res) {
        // Controller logic here
      }
  
      // Create
      transactionController.create = async (req, res) => {
        try {
            const data = req.body;
            const transaction = await transactionService.create(data);
          
            if(transaction){
                res.status(200).send({status:true,message:"transaction Created Successfully",data:transaction,error:""});
            }
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Read
      transactionController.read = async (req, res) => {
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

          const data = await transactionService.find();
          const totalCount = await transactionService.countDocument(query);
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
      transactionController.update = async (req, res) => {
        try {
          const id = req.params.id;
          const data = req.body;
          const transaction = await transactionService.update(id,data);
          if(transaction){
            res.status(200).send({status:true,message:"transaction Updated Successfully",data:transaction,error:""});
          }
          
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Delete
      transactionController.delete = async (req, res) => {
        try {
          const id = req.params.id;
          const transaction = await transactionService.delete(id);
          if(transaction){
            res.status(200).send({status:true,message:"transaction Deleted Successfully",data:[],error:""});
          }
          
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      module.exports = transactionController;
    