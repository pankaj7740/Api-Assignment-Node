import express ,{Request,Response} from 'express';
import * as fs from "node:fs";
import EventEmitter from 'node:events';
import {products} from "./Api-Object/index"

const events = new EventEmitter();


const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log(`server is listening at port num: ${3000}`);
})

app.use(express.json());

app.post("/product",((req,res,next)=>{
    console.log("before posting any products");
    next();
}),((request:Request,response:Response)=>{
    const productBody = request.body;
    if(productBody){
        products.push(productBody);
        response.status(200).json({
            status:true,
            message:"ok",
            data:products
        })
    }else{
          response.status(404).send("product has not been posted");
    }  
}));

app.get("/product",((req,res,next)=>{
    console.log("response is retrieving");
    next();   
}),((request:Request,response:Response)=>{
    // response.status(200).send("successful").send(products)
   response.status(200).json({
    status:true,
    message:'ok',
    data:products
   })
}))

app.get("/product/:id",((req,res,next)=>{
    console.log("retrieving data using id");
    next();
}),((request:Request,response:Response)=>{
    const productId = request.params.id;
    const product = products.find((item)=>item.id === parseInt(productId));
    if(product){
       response.status(200).json({
        status:true,
        message:'ok',
        data:product
       })
    }else{
        response.status(404).send("product is not available");
    }
}));

app.put("/product/:id",((request:Request,response:Response)=>{
    const productId = request.params.id;
    const body = request.body;
    let index = products.findIndex((item)=>item.id == parseInt(productId))
    let product = products.find((item)=>item.id == parseInt(productId));
    if(product){
        // product = {id:productId,...body};
        // products[index] = product;
        products[index] = {id:productId,...body}       
        response.status(200).json({
            status:true,
            message:"ok",
            data:products
        })      
    }else{
        response.status(405).json({
            status: false,
            message: "products not found",
            // data:null
            data : undefined
        })
    }
    
}));

app.delete("/product/:id",(request:Request,response:Response)=>{
    const productId = request.params.id; 
    const product = products.find((item)=>item.id == parseInt(productId));
    const index = products.findIndex((item)=>item.id == parseInt(productId));
    if(product){
        const deletedProduct = products.slice(index,1);
        response.status(200).json({
            status:true,
            message:"ok",
            data:deletedProduct
        })
    }else{
        response.status(405).json({
            status:false,
            message:"products not found",
            data:undefined
        })
    }
})
  










