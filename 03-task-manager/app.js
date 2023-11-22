const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

//registering middlewares
app.use("/api/v1/tasks",tasks)
//basic route

const port = 5500;
app.listen(port,(req,res)=>{
    console.log("The server is running on port 5500..");
})