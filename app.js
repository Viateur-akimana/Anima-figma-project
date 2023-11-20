const http = require("http");
const fs = require("fs");

http
.createServer(()=>{
  const text = fs.readFileSync("./content/first.txt","utf8",(req,res)=>{
     res.end();
  });
})
.listen(5000);