const express = require("express");
const authenticate = require("../middleware/authenticate");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

router.post("/create",authenticate,reviewController.createReview);
router.get("/product/:productId",authenticate,reviewController.getAllReview);


module.exports=router; 

// {createReview,getAllReview}