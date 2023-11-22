const getAllTasks =(req,res)=>{
    res.json("Get all items")
}
const createTask = (req,res)=>{
   res.json(req.body);
   console.log(req.body);
}
const getTask = (req,res)=>{
    res.json({id:req.params.id})
 }
 const updateTask = (req,res)=>{
    res.send("creating tasks")
 }
 const deleteTask = (req,res)=>{
    res.send("creating tasks")
 }
 
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask

}