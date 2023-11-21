const express = require('express');
const app = express();

const logger = (req,res,next) =>{
  const method = req.method;
  const url = req.url;
  const date = req.date;
console.log(method,url,date);
}
app.get("/",logger,(req,res)=>{
  res.send("Home page");
})
app.get("/about",logger,(req,res)=>{
  res.send("This about page")
})

app.listen(5001,()=>{
  console.log("THe server is runninfg on port 5000..");
})
