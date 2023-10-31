
const fs = require('fs');
const path = require('path')
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
  
      commanController.retrieveFile = (req, res, next) => {
        try{
            res.status(200).sendFile(path.join(__dirname, '../uploads/'+req.params.file));
        }catch(error){
            res.status(500).send({ status:"error", message: error });
        }
    }
  
      module.exports = commanController;
    