const express = require('express');
const app = express();
const {people} = require("./data");
app.use(express.urlencoded({extended:true}));
app.use(express.static("./method-public"));

// // const morgan = require('morgan')
// // const logger = require("./logger");
// // const authorize = require("./authorize")

// // // app.use(logger);
// // // app.use(authorize);
// // app.use(morgan('tiny'))
// app.get("/",(req,res)=>{
//   res.send("Home page");
// })
// app.get("/about",(req,res)=>{
//   res.send("This about page")
// })

app.get('/api/people',(req,res)=>{
  res.status(200).send({success:true,data:people});
})
app.post('/login',(req,res)=>{
  const {name} = req.body;
  if(name){
    res.status(200).send(`Welcome ${name}`)
  }
  res.status(404).send("Please provide credentials");
})
app.listen(5001,()=>{
  console.log("THe server is runninfg on port 5000..");
})
