const express=require("express");
const authenticate = require("../middleware/authenticate");
const router=express.Router();

const cartItemController=require("../controllers/cartItemController");

router.put("/:id",authenticate,cartItemController.updateCartItem);
router.delete("/:id",authenticate,cartItemController.removeCartItem);

module.exports=router; 

// updateCartItem,removeCartItem
