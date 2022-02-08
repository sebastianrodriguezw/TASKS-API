const TaskModel = require('../models/task.model')

// get all tasks
exports.getTaskList = (req, res) =>{
  TaskModel.getAllTasks((tasks, err) =>{
    if(err);
    res.setHeader('content-type', 'application/json');
    res.send(tasks);
    res.end();
  })
}

// get specific task
exports.getTask = (req, res) =>{
  TaskModel.getTask(req.params.id, (task, err) =>{
    if(err);
    res.setHeader('content-type', 'application/json');
    res.send(task);
    res.end();
  })
}
