import express from "express";
const server = express();
import {createProduct} from './controller/Product'
import mongoose from "mongoose";
//middleware
server.use(express.json())//to parse req body

main().catch(err => console.log(err));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log("database connected")

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
server.get('/',(req,res)=>{
    res.json({status:"sucess"})

});
server.post('/products',createProduct);

server.listen(8080,()=>{
    console.log("server started at point number 8080")
})