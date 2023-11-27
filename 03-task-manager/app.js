const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectedDb = require("./db/connect");
const notFound = require("./middlewares/not-found")
require('dotenv').config();

//registering middlewars
app.use(express.static('./public'));
app.use("/api/v1/tasks",tasks);
app.use(notFound);
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