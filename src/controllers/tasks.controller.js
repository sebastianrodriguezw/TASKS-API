const TaskModel = require('../models/task.model')

// get all tasks
exports.getTaskList = (req, res) =>{
  TaskModel.getAllTasks((tasks, err) =>{
    if(!err) {
      return res.status(200).json({
        status: 'success',
        data: tasks
      });
    }else{
      return res.status(400).json({
        status: 'aborted',
        error: err
      });
    }
  })
}

// get specific task
exports.getTask = (req, res) =>{
  TaskModel.getTask(req.params.id, (task, err) =>{
    if (task.length > 0) {
      return res.status(200).json({
        status: 'success',
        data: task
      });
    }  else{
      return res.status(400).json({
        status: 'forbidden',
        error: 'This record not exist'
      });
    }
  })
}
