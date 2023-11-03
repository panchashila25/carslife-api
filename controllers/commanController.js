
const fs = require('fs');
const path = require('path')
const request = require('request');
const formidable = require('formidable');
      function commanController(req, res) {
        // Controller logic here
      }
  
      // Create
      commanController.uploadFile = async (req, res) => {
        const form = new formidable.IncomingForm({allowEmptyFiles:false,keepExtensions:true});
        
        form.parse(req, function(err, fields, files){
            if(fields.file !== ""){
                var oldPath = files.file[0].filepath;
                var newPath = path.join(__dirname, '../uploads')
                        + '/'+files.file[0].newFilename
                var rawData = fs.readFileSync(oldPath)
            
                fs.writeFile(newPath, rawData, function(err){
    
                    res.status(200).send({
                        status:"success",
                        message : "Successfully Uploaded",
                        data: {
                            url:files.file[0].newFilename
                        }
                    });
                });
            } else {
                res.status(500).send({ status:"error", message: "File is Missing" });
            }
        });
      
      };
  
      commanController.searchPlaces = async (req, res) => {
        var options = {
            'method': 'GET',
            'url': 'http://api.positionstack.com/v1/forward?access_key=1f6a2d9e59262ac47433be709bba0519&query='+req.query.search,
            'headers': {}
        };
        request(options, function (error, response) {
                res.status(200).send({
                    status:"success",
                    message : "Successfully Uploaded",
                    data: JSON.parse(response.body)
                });
        });
      
      };
      commanController.retrieveFile = (req, res, next) => {
        try{
            res.status(200).sendFile(path.join(__dirname, '../uploads/'+req.params.file));
        }catch(error){
            res.status(500).send({ status:"error", message: error });
        }
    }
  
      module.exports = commanController;
    