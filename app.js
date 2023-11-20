const http = require("http");
const fs = require("fs");

http
.createServer((req,res)=>{
  const fileStream = fs.createReadStream("./content/first.txt","utf8");
  fileStream.on('on',()=>{
    fileStream.pipe(res)
  })
  fileStream.on('error',(err)=>{
    res.end(err);
  })
  })
.listen(4000);