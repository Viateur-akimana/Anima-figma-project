const mongoose = require('mongoose');

const tasKSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide the name"],
        maxlength:[20,"please enter the name with less than 20 characters"]
    },
    completed:{
        type:Boolean,
        default:false
    }
})

const Task = mongoose.model("Task",tasKSchema);

module.exports = Task;