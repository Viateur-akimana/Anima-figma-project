const Task = require("../model/tasks")
const getAllTasks =(req,res)=>{
    res.json("Get all items")
}
const createTask = async(req,res)=>{
   const task = Task.create({name:"VIateur",completed:true})
   res.status(200).json({task});
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