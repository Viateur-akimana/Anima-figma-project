const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if(err){
    console.log(err);
    return
  }
  const first = result;
  readFile("./content/second.txt","utf8",(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const second = result;
    writeFile("./content/result-sync.txt",`the content in file is ${first} ${second}`,(err,result)=>{
        if (err) {
           console.log(err);
           return 
        }
        console.log("THe task is already done");
    })
  })
})
console.log('starting next task')