
      // controllers/authController.js
      const authService = require('../services/authService');

      function authController(req, res) {
        // Controller logic here
      }
  // Create
authController.register = async (req, res) => {
  try {
      const userData = req.body;
      userData.password = bcrypt.hashSync(req.body.password,8);
      const user = await authService.register(userData);
      if(user){
          console.log(error)
          res.status(200).send({status:true,message:"User Registered Successfully",data:user,error:""});
      }
  } catch (error) {
      console.log(error)
      res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
  }
};

// Read
authController.authenticate = async (req, res) => {
  try {
      const {email,password} = req.body;
      const user = await authService.authenticate(email);
      console.log(password)
      console.log(user)
      let passwordIsValid = bcrypt.compareSync(
          password,
          user.password
        );
      console.log(passwordIsValid);
      if (!passwordIsValid) {
          return res.status(500).send({
            error:{
              accessToken: null,
              message: "Invalid Email or Password!",
            }
          });
      }

      let token = jwt.sign({
          id: user.id
      }, process.env.JWTSecret, {
          expiresIn: process.env.JWTExpiration,
      });
      
      user.token = token;
      res.status(200).send({status:true,message:"User Logged in Successfully",data:user,error:""});
  } catch (error) {
      console.log(error)
      res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
  }
};


module.exports = authController;