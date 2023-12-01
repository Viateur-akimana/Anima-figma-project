const mongoose = require("mongoose");

mongoose.set('strictQuery',true);
const connectedDb = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/products",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((req,res)=>console.log("connected successfully to database"))
    .catch((err)=>console.log(err))
}

module.exports=connectedDb;