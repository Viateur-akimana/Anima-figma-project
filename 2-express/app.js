const express = require('express');
const app = express();
const logger = require("./logger");
app.use(logger);
app.get("/",(req,res)=>{
  res.send("Home page");
})
app.get("/about",(req,res)=>{
  res.send("This about page")
})

app.listen(5001,()=>{
  console.log("THe server is runninfg on port 5000..");
})
