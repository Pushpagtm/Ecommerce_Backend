const express =require ("express");
const server = express();
const mongoose=require('mongoose');
const { createProduct } = require("./controller/Product");

const productsRouter = require('./routes/Products');
//middleware
server.use(express.json())//to parse req body

main().catch(err => console.log(err));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log("database connected")

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
server.get('/',(req,res)=>{
    res.json({status:"sucess"})

});
// server.use('/products',productRoute.router);
server.use('/products', productsRouter.router);

server.listen(8080,()=>{
    console.log("server started at point number 8080")
})