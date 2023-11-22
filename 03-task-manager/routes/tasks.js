const express = require("express");
const router = express.Router()
const {getAllTasks,createTask,getTask,updateTask,deleteTask} = require("../controllers/tasks")

router.get("/",getAllTasks)
router.post("/",createTask)
router.get("/:id",getTask);
router.put("/",updateTask);
router.delete("/",deleteTask)

module.exports = router;