const router = require("express").Router();

const AdminController=require("../Controller/AdminUserController")



router.post("/signUp", (req,res)=>{AdminController.signUp(req,res)});
router.post("/login",(req,res)=>{AdminController.login(req,res)});
router.get("/getAdmin", (req,res)=>{AdminController.getAdminUser(req,res)});
router.get("/getIndividualAdmin/:id", (req,res)=>{AdminController.getIndividualAdmin(req,res)});
router.put("/updateAdmin/:id", (req,res)=>{AdminController.updateAdmin(req,res)});
router.delete("/deleteAdmin/:id", (req,res)=>{AdminController.deleteAdmin(req,res)});



module.exports= router;
