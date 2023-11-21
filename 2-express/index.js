const express = require("express");
const {products} = require("./data");
const app = express();
app.get("/",(req,res)=>{
  res.send("<h1>Welmcome to homepage</h1><a href='/api/product'> products</a>")
})
app.get("/api/product",(req,res)=>{
  const newProduct = products.map((product)=>{
  
    return product;
  })
  res.json(newProduct);
})
app.get("/api/product/1",(req,res)=>{
  const singleProduct = products.find((product) => product.id === 1)
  res.json(singleProduct);
})
app.get("/api/product/:productID",(req,res)=>{
  const {productID} = req.params;
  const singleProduct = products.find((product) => product.id == productID)
  if(!singleProduct)
  return res.status(404).json("Product doesn,t exist");
  res.json(singleProduct);
})
app.get("/api/v1/query",(req,res)=>{
  let sortedProducts = [...products];
  const {search,limit} = req.query;
  if(search){
    sortedProducts=products.filter((product)=>{
       return product.name.startsWith(search);
    })
    if(limit){
      sortedProducts = products.slice(0,Number(limit));
      res.status(200).json(sortedProducts);
    }
  }
})
app.get("/about",(req,res)=>{
  res.status(200).send("You are welcome back on the about page ")
})
app.get("*",(req,res)=>{
  res.status(404).send("Resource is not found");
})

app.listen(4000,(req,res)=>{
  console.og("Server on running on port 50000...");
})