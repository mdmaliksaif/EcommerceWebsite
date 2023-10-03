const app= require(".");
const { connectDb } = require("./config/db");


const PORT=5454;

app.listen(PORT,async()=>
{
await connectDb()
.then(console.log("db Connected"))
.catch((error)=>console.log(error))
    console.log("ecommerce api listen on Port :",PORT);
})