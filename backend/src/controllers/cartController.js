const express=require("express");
const router=express.Router();

const cartService=require("../services/cartServices");



const findUserCart = async (req, res) => {
    try {
      const user = req.user;
      const cart = await cartService.findUserCart(user._id);
       return res.status(200).send(cart); 
    } catch (error) {
      // Handle error here and send appropriate response
      res.status(500).send({ message: "Failed to get user cart.", error: error.message });
    }
}
  

  const addItemToCart = async (req, res) => {
    try {
      const user = req.user;
      // console.log(user,user._id);
      // console.log((user._id).toString());
      // console.log(req.body);
     const cartItem= await cartService.addCartItem(user.id,req.body);
     
      res.status(200).send({message:"Item Added To Cart Successfully", status:true,cartItem});
    } catch (error) {
      // Handle error here and send appropriate response
      res.status(500).send({ message: "Failed to add item to cart.", error: error.message });
    }
  }

  module.exports={findUserCart,addItemToCart}; 