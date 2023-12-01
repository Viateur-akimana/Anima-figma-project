const express = require("express");
const app = express();
const connectedDb = require("./db/connect");
const productRouter = require("./controllers/products");

app.use("api/v1/products",productRouter);

const PORT = process.env.PORT || 3000;
const start =async()=>{
    try {
        await connectedDb();
       app.listen(PORT,(req,res)=>{
    console.log(`Connected successfully on the port ${PORT}`)
})
    } catch (error) {
        console.log(error);
    }
}

start();