const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectedDb = require("./db/connect");
require('dotenv').config();

//registering middlewars
app.use("/api/v1/tasks",tasks)
//basic route

const port = 3000;

const start = async() =>{
    try {
        await connectedDb(process.env.MONGO_URI)
        app.listen(port,(req,res)=>{
    console.log("The server is running on port 5500..");
})
    } catch (error) {
        console.log(error)
    }
}

start();