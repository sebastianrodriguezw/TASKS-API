const { Task } = require('../../models');

var TaskObj = (task) => {
  this.id = task.id;
  this.date = task.date;
  this.name = task.name;
  this.description = task.description;
  this.status = task.status;
}

// get all tasks
TaskObj.getAllTasks = async(result) =>{
  try{
    const task = await Task.findAll();
    console.log("Task fetched successfuly");
    result(task, null);
  } catch (err) {
    result(null, err.parent.sqlMessage);
  }  
}

// create task 
TaskObj.createTask = async(body, result) =>{
  const { date, name, description, status } = body
  
  try{
    const task = await Task.create({ date, name, description, status });

    result(task, null);
  }catch(err){
    result(null, err.parent.sqlMessage);
  }
}

// edit task 
TaskObj.updateTask = async(body, params, result) =>{
  try{
    const task = await Task.update(body, { where: params });

    result(task, null);
  }catch (err) {
    result(null, err.parent.sqlMessage);
  }
}

// get task by id
TaskObj.getTask = async(params, result) =>{
  try{
    const task = await Task.findOne({ where: params });

    result(task, null);
  }catch (err) {
    result(null, err.parent.sqlMessage);
  }   
} 

// delete task 
TaskObj.deleteTask = async(params, result) =>{
  try{
    const task = await Task.destroy({ where: params });

    result(task, null);
  }catch (err) {
    result(null, err.parent.sqlMessage);
  }
}


module.exports = TaskObj;