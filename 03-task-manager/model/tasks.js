const mongoose = require('mongoose');

const tasKSchema = new mongoose.Schema({
    name:String,
    completed:Boolean
})

const Task = mongoose.model("Task",tasKSchema);

module.exports = Task;