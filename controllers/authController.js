
      // controllers/authController.js
      const { user } = require('../models');
const User = require('../models/user');
const authService = require('../services/authService');

    

      function authController(req, res) {
        // Controller logic here
      }

      // otp validation
     const staticOtp= 1234;
    
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

// sendotp
authController.sendOTP = async (req, res) => {
  if (req.body.mobile == "" || req.body.mobile == undefined) {
    return res.status(500).send({
      accessToken: null,
      message: "Missing Data",
    });
  }


  let user = await User.countDocuments({mobile:req.body.mobile,role:"user"});
  if(user != 1){
    let newUser = new User(req.body);
    let savedUser = await newUser.save();
  }


  const otp = 1234;
  res.status(200).send({
    status: "success",
    message: "OTP Sent Successfully",
    data: {
      otp: otp
    }
  });
}





authController.sendOTPs = async (req, res) => {
  if (req.body.mobile == "" || req.body.mobile == undefined) {
    return res.status(500).send({
      accessToken: null,
      message: "Missing Data",
    });
  }


  let user = await User.countDocuments({mobile:req.body.mobile,role:"driver"});

  if(user==0){
    return res.status(500).send({
      accessToken: null,
      message: "User Not Found",
    });
  }

  let min = 1000; // Minimum value for a four-digit number
 let max = 9999; // Maximum value for a four-digit number
   let otp = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(otp)
  res.status(200).send({
    status: "success",
    message: "OTP Sent Successfully",
    data: {
      otp: otp
    }
  });
}






















// Read
authController.authenticate = async (req, res) => {
  try {
      const {mobile,otp} = req.body;
      const user = await authService.authenticate(mobile,otp);

      console.log(user)
     console.log(otp)
     console.log(req.body)
      res.status(200).send({status:true,message:"User Logged in Successfully",data:user,error:""});
  } catch (error) {
      console.log(error)
      res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
  }
};


module.exports = authController;