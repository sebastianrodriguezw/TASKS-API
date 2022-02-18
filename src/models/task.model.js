const { Task } = require('../../models');
const { User } = require('../../models');
const jwt = require('jsonwebtoken')
const {promisify} = require('util')

var TaskObj = (task) => {
  this.id = task.id;
  this.date = task.date;
  this.name = task.name;
  this.description = task.description;
  this.status = task.status;
}

/*
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
*/

// get user tasks
TaskObj.get_user_tasks = async(id, token, result) =>{
  const decodificada = await promisify(jwt.verify)(token, process.env.JWT_CREDENTIALS)
  await User.findOne({ where: { id: decodificada.id } });

  if(decodificada.id == id){
    try{
      const tasks = await Task.findAll({ where: { user_id: id } });
      console.log("Task fetched successfuly");
      result(tasks, null);
    } catch (err) {
      result(null, err);
    }  
  }else{
    result(null, {
      msg: "You do not have permission to display another user tasks"
    });
  }
  
}
// create task 
TaskObj.createTask = async(body, result) =>{
  console.log(body)
  const { date, name, description, status, user_id } = body
  
  try{
    const task = await Task.create({ date, name, description, status, user_id });
    
    result(task, null);
  }catch(err){
    result(null, err);
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