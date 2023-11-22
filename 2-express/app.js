const express = require('express');
const app = express();
const { people } = require("./data");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("./method-public"));

// app.get('/', (req, res) => {
//   res.send("Home page");
// });

// app.get('/about', (req, res) => {
//   res.send("This is the about page");
// });

app.get('/api/people', (req, res) => {
  res.status(200).send({ success: true, data: people });
});

app.post('/login', (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  return res.status(404).send("Please provide credentials");
});

app.post('/api/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(404).json({ success: false, msg: "Please provide the name" });
  }
  res.status(200).json({ success: true, person: name });
});
app.post('/api/postman/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(404).json({ success: false, msg: "Please provide the name" });
  }
  res.status(200).json([...people,name]);
});
app.put("/api/people/:id",(req,res)=>{
  const {id} = req.params;
  const {name} = req.body;
  const person = people.find((person)=> person.id === Number(id))
  if(!person){
    res.status(404).json({success:false, msg:"No peson with search id"})
  }
  const newPerson = people.map((person)=>{
    if(person.id === Number(id)){
      person.name = name;
}
  return person;
  })
  res.status(200).send({success:true,data:newPerson});
})
app.listen(5001, () => {
  console.log("The server is running on port 5001...");
});
