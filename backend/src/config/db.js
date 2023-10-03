const mongoose = require("mongoose")

const mongoDbUrl='mongodb://127.0.0.1:27017/Ecommerce'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}




// mongoose.connect('mongodb://127.0.0.1:27017/food-delievery-app') 