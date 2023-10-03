

const express=require("express");
const authenticate = require("../middleware/authenticate");
const router=express.Router();
const orderController=require("../controllers/orderController")

router.post("/",authenticate,orderController.createOrder);
router.get("/user",authenticate,orderController.orderHistory);
router.get("/:id",authenticate,orderController.findOrderById);


module.exports=router;


// createOrder, findOrderById, orderHistory