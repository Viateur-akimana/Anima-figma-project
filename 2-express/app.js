const express = require('express');
const app = express();
const morgan = require('morgan')
const logger = require("./logger");
const authorize = require("./authorize")

// app.use(logger);
// app.use(authorize);
app.use(morgan('tiny'))
app.get("/",(req,res)=>{
  res.send("Home page");
})
app.get("/about",(req,res)=>{
  res.send("This about page")
})

app.listen(5001,()=>{
  console.log("THe server is runninfg on port 5000..");
})
