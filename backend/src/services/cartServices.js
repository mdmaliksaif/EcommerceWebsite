const Cart = require("../models/cartModel");
const CartItem = require("../models/cartItemModel");
const Product = require("../models/productModel");
// const User = require("../models/user.model.js");


// Create a new cart for a user
async function createCart(user) {
  try
  {
    const cart = new Cart({ user });
    const createdCart = await cart.save();
    return createdCart;

  }
  catch(error){
  throw new Error(error.message);
  }
}

// Find a user's cart and update cart details
async function findUserCart(userId) {
  try {
    let cart =await Cart.findOne({ user: userId })
    // console.log(cart);
    let cartItems=await CartItem.find({cart:cart._id}).populate("product")
  
    cart.cartItems=cartItems
    
  
    let totalPrice = 0;
    let totalDiscountedPrice = 0;
    let totalItem = 0;
  
    for (const cartItem of cart.cartItems) {
      totalPrice += cartItem.price;
      totalDiscountedPrice += cartItem.discountedPrice;
      totalItem += cartItem.quantity;
    }
  
    cart.totalPrice = totalPrice;
    cart.totalItem = totalItem;
    cart.totalDiscountedPrice = totalDiscountedPrice;
    cart.discounte = totalPrice - totalDiscountedPrice;
  
    // const updatedCart = await cart.save();
    return cart;
    
  } catch (error) {
    throw new Error(error.message  )
  }
}

// Add an item to the user's cart
async function addCartItem(userId, req) {
  try {
    let cart = await Cart.findOne({ user: userId });
    const product = await Product.findById(req.productId);

    if (!cart) {
      // If the cart doesn't exist, create a new cart for the user
      const newCart = new Cart({ user: userId });
      await newCart.save();
      // Assign the newly created cart to the 'cart' variable
      cart = newCart;
    }

    const isPresent = await CartItem.findOne({ cart: cart._id, product: product._id, userId });

    if (!isPresent) {
      const cartItem = new CartItem({
        product: product._id,
        cart: cart._id,
        quantity: 1,
        userId,
        price: product.price,
        size: req.size,
        discountedPrice: product.discountedPrice,
      });

      const createdCartItem = await cartItem.save();
      cart.cartItems.push(createdCartItem);
      await cart.save();
      return createdCartItem;
    } else {
      return 'Item is already in the cart';
    }
  } catch (error) {
    throw new Error(error.message);
  }
}


module.exports = { createCart, findUserCart, addCartItem };