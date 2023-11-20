const express = require("express");
const {products} = require("./data");
const app = express();
app.get("/",(req,res)=>{
  res.json(products);
})

app.get("/about",(req,res)=>{
  res.status(200).send("You are welcome back on the about page ")
})
app.get("*",(req,res)=>{
  res.status(404).send("Resource is not found");
})

app.listen(5000,(req,res)=>{
  console.log("Server on running on port 5000...");
})