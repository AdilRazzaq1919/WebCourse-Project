const router = require("express").Router();

// const { Signup, Login } =  require("../Controller/UserController");
const userController=require("../Controller/UserController")



router.post("/signUp", (req,res)=>{userController.signUp(req,res)});
router.post("/login",(req,res)=>{userController.login(req,res)});


module.exports= router;
