const express=require("express");
const router=express.Router();
const authenticate = require("../middleware/authenticate");
const adminOrderController=require("../controllers/adminOrderController")

router.get("/",authenticate,adminOrderController.getAllOrders);
router.put("/:orderId/confirmed",authenticate,adminOrderController.confirmedOrder);
router.put("/:orderId/ship",authenticate,adminOrderController.shippOrder);
router.put("/:orderId/deliver",authenticate,adminOrderController.deliverOrder);
router.put("/:orderId/cancel",authenticate,adminOrderController.cancelledOrder);
router.delete("/:orderId/delete",authenticate,adminOrderController.deleteOrder);

module.exports=router;

// getAllOrders,
// confirmedOrder,
// shippOrder,
// deliverOrder,
// cancelledOrder,
// deleteOrder