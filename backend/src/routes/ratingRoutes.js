const express = require("express");
const authenticate = require("../middleware/authenticate");
const router = express.Router();
const ratingController = require("../controllers/ratingController");

router.get("/create",authenticate,ratingController.createRating);
router.put("/product/:productId",authenticate,ratingController.getProductsRating);


module.exports=router;
 


// {getProductsRating,createRating}