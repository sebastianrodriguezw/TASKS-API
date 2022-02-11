const TaskModel = require('../models/task.model')

// get all tasks
exports.getTaskList = (req, res) =>{
  TaskModel.getAllTasks((tasks, err) =>{
    if(!err) {
      return res.json({
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

// create specific task
exports.createTask = (req, res) =>{
  body = req.body

  if (body.date || body.name || body.description || body.status){
    TaskModel.createTask(req.body, (rows_affected, err) =>{
      if (rows_affected > 0) {
        return res.send({
          status: 'success',
          message: 'Task created successfully'
        });
      }  else{
        return res.status(400).json({
          status: 'bad_request',
          error: err.sqlMessage
        });
      }
    })
  }else{
    return res.status(404).json({
      status: 'forbidden',
      error: 'parameters missing'
    });
  }
  
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
      return res.status(404).json({
        status: 'forbidden',
        error: 'This record not exist'
      });
    }
  })
}

// delete specific task
exports.deleteTask = (req, res) =>{
  TaskModel.deleteTask(req.params.id, (rows_affected, err) =>{
    if (rows_affected > 0) {
      return res.status(200).json({
        status: 'success',
        message: 'Task deleted successfully'
      });
    }  else{
      return res.status(404).json({
        status: 'forbidden',
        error: 'This record not exist'
      });
    }
  })
}


