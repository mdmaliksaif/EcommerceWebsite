const express=require("express");
const authenticate = require("../middleware/authenticate");
const router=express.Router();
const cartController=require("../controllers/cartController")

// GET: /api/cart
router.get("/", authenticate, cartController.findUserCart);

// PUT: /api/cart/add
router.put("/add", authenticate, cartController.addItemToCart);


module.exports=router;
   

// findUserCart,addItemToCart