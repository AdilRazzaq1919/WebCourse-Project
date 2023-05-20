const router = require("express").Router();
const sellerController=require('../Controller/SellerUserController')
const Controller=require('../Controller/SellerProductController')
const OrderController=require('../Controller/SellerOrderController')


router.post("/addSeller", (req,res)=>{sellerController.addSeller(req,res)});
router.get("/getSeller", (req,res)=>{sellerController.getSellerUser(req,res)});
router.put("/updateSeller/:id", (req,res)=>{sellerController.updateSeller(req,res)});
router.delete("/deleteSeller/:id", (req,res)=>{sellerController.deleteSeller(req,res)});
router.get("/getIndividualSeller/:id", (req,res)=>{sellerController.getIndividualSeller(req,res)});



router.get("/getProducts", (req,res)=>{Controller.getProducts(req,res)});
router.post("/addProduct", (req,res)=>{Controller.addProduct(req,res)});
router.put("/updateProduct/:id", (req,res)=>{Controller.updateProduct(req,res)});
router.delete("/deleteProduct/:id", (req,res)=>{Controller.deleteProduct(req,res)});
router.get("/getIndividualProduct/:id", (req,res)=>{Controller.getIndividualProduct(req,res)});


router.get("/getOrderDetail", (req,res)=>{OrderController.getSellerOrder(req,res)});
router.get("/getIndividualOrderDetail/:id", (req,res)=>{OrderController.getIndividualOrder(req,res)});
router.delete("/deleteOrderDetials/:id", (req,res)=>{OrderController.deleteOrder(req,res)});



module.exports= router;
