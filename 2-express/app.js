const http = require("http");

const server  = http.createServer((req,res)=>{
    const url = req.url;
  if(url === '/'){
res.writeHead(201,{"content-type":"text/html"});
res.write('<h1> homepage </h1>');
res.end();
  }
  else if(url === '/about'){
    res.writeHead(201,{"content-type":"text/html"});
res.write('<h1> About page</h1>');
res.end();
  }
  else{
    res.writeHead(201,{"content-type":"text/html"});
    res.write('<h1> NOT FOUND PAGE </h1>');
    res.end();
  }
})

server.listen(5000);