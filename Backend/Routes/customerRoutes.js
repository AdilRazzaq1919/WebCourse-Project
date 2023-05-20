const router = require("express").Router();

const CustomerController=require('../Controller/CustomerUserController')
const Controller=require('../Controller/CustomerOrderController')

router.post("/addCustomer", (req,res)=>{CustomerController.addCustomer(req,res)});
router.get("/getCustomer", (req,res)=>{CustomerController.getCustomerUser(req,res)});
router.get("/getIndividualCustomer/:id", (req,res)=>{CustomerController.getIndividualCustomer(req,res)});
router.put("/updateCustomer/:id", (req,res)=>{CustomerController.updateCustomer(req,res)});
router.delete("/deleteCustomer/:id", (req,res)=>{CustomerController.deleteCustomer(req,res)});

router.get("/getCustomerOrder", (req,res)=>{Controller.getCustomerOrder(req,res)});
router.get("/getIndividualCustomerOrder/:id", (req,res)=>{Controller.getIndividualCustomerOrder(req,res)});
router.delete("/deleteCustomerOrder/:id", (req,res)=>{Controller.deleteCustomerOrder(req,res)});


module.exports=router;