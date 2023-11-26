const mongoose = require("mongoose")
mongoose.set('strictQuery', true)
const connectDB = (url) => {
  return mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>console.log("the server is well connected to database "))
  .catch((err)=>console.log(err));
};

module.exports = connectDB;