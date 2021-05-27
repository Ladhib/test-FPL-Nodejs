var express = require('express');
var router = express.Router();
var userModel = require ('../model/user');
const jwt = require('jsonwebtoken');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
const jwtConfig = require("../JWTConfig/jwtverify") 

// Add user:
router.post('/userCreate',(req, res)=> {
  console.log(req.body);
  const user = new userModel({
    name:req.body.name,
    email: req.body.email,
    password : req.body.password
    
});
user.save().then(userCreate => {
  res.status(201).json({
      message: "user added successfully",

  });
})
.catch(error => {
  console.log(error)
  res.status(500).json({
      message: "failed to create this user!"+error

  });
});
})

router.get("/login", function(req, res, next) {
  userModel.find().then(allUsers=>{
    res.json(allUsers)
  })
});

// generateToken:
router.post("/generateToken",function(req,res,next){
  const data={
             name : req.body.name,
             email: req.body.email,
             password:req.body.password,
           };
           const createdToken = jwt.sign(data,'secret', {expiresIn:'24h'});
           res.json({message:'login succesfully', token :createdToken })
})


module.exports = router;
