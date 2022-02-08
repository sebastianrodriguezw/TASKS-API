const TaskModel = require('../models/task.model')

// get all tasks
exports.getTaskList = (req, res) =>{
  TaskModel.getAllTasks((tasks, err) =>{
    if(err);
    res.send(tasks);
    console.log(tasks);
  })
}