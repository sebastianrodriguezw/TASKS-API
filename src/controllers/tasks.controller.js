const TaskModel = require('../models/task.model')

// get all tasks
exports.getTaskList = (req, res) =>{
  console.log('Tasks');
  TaskModel.getAllTaks((err, tasks) =>{
    console.log("Here")
  })
}