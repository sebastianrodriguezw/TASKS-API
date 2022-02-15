const TaskModel = require('../models/task.model')

// get all tasks
exports.getTaskList = (req, res) =>{
  TaskModel.getAllTasks((tasks, err) =>{
    if(!err){
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

// create specific task
exports.createTask = (req, res) =>{
  body = req.body
  TaskModel.createTask(body, (task) =>{
    if(!err){
      return res.status(200).send({
        status: 'success',
        message: 'Task created successfully'
      });
    }else{
      return res.status(400).json({
        status: 'bad_request',
        error: err
      });
    } 
  })
}

// create specific task
exports.updateTask = (req, res) =>{
  var body = req.body;
  var params = req.params;
  
  TaskModel.updateTask(body, params, (task, err) =>{
    if(!err){
      if(task[0] === 1){
        return res.status(200).send({
          status: 'success',
          message: 'Task updated successfully'
        });
      }else{
        return res.status(404).json({
          status: 'forbidden',
          error: 'This record not exist or not changes'
        });
      }
    }else{
      return res.status(400).json({
        status: 'bad_request',
        error: err
      });
    }
  })
}

// get specific task
exports.getTask = (req, res) =>{
  var params = req.params;

  TaskModel.getTask(params, (task, err) =>{
    if(!err){
      if(task){
        return res.status(200).send({
          status: 'success',
          data: task
        });
      }else{
        return res.status(404).json({
          status: 'forbidden',
          error: 'This record not exist'
        });
      }
    }else{
      return res.status(400).json({
        status: 'bad_request',
        error: err
      });
    } 
  })
}

// delete specific task
exports.deleteTask = (req, res) =>{
  var params = req.params;

  TaskModel.deleteTask(params, (task, err) =>{
    if (task > 0) {
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


