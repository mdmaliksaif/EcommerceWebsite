const express=require("express");
const router=express.Router();
const productController=require("../controllers/productController");
const authenticate = require("../middleware/authenticate");

router.get('/',authenticate, productController.getAllProducts);
router.get('/id/:id',authenticate, productController.findProductById);
router.get('/search',authenticate,  productController.searchProduct);


module.exports = router;


// createProduct,
// deleteProduct,
// updateProduct,
// getAllProducts,
// findProductById,
// findProductByCategory,
// searchProduct,
// createMultipleProduct