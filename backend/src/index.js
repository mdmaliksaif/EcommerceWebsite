const express=require("express")

 const cors=require("cors")

 const app=express()

 app.use(express.json())

 app.use(cors())

app.get("/",(req,res)=>
{
    
    return res.status(200).send({message:"welcome to ecommerce api",status:true})
})

const AuthRoutes=require("./routes/authRoutes")
app.use("/auth",AuthRoutes)

const UserRoutes=require("./routes/userRoutes")
app.use("/api/users",UserRoutes)

const ProductRoutes=require("./routes/productRoutes")
app.use("/api/products",ProductRoutes)

const AdminProductRoutes=require("./routes/adminProductRoutes")
app.use("/api/admin/products",AdminProductRoutes)

const CartRoutes=require("./routes/cartRoutes")
app.use("/api/cart",CartRoutes)

const CartItemRoutes=require("./routes/cartItemRoutes")
app.use("/api/cart_items",CartItemRoutes)

const OrderRoutes=require("./routes/orderRoutes")
app.use("/api/orders",OrderRoutes)

const AdminOrderRoutes=require("./routes/adminOrderRoutes")
app.use("/api/admin/orders",AdminOrderRoutes)

const ReviewRoutes=require("./routes/reviewRoutes")
app.use("/api/reviews",ReviewRoutes)

const RatingRoutes=require("./routes/ratingRoutes")
app.use("/api/ratings",RatingRoutes)

const paymentRoutes=require('./routes/paymentRoutes')
app.use("/api/payments",paymentRoutes) 



 module.exports=app;