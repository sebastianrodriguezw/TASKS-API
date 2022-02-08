const db_cont = require('../../config/db.config');

var Task = (task) => {
  this.id = task.id;
  this.date = task.date;
  this.name = task.name;
  this.description = task.description;
  this.status = task.status;
}

//get task
Task.getAllTasks = async(result) =>{
  const data = await db_cont.execute('SELECT * FROM tasks',( err, res) =>{
    console.log("Task fetched successfuly");
    result(res, err);
  })    
}

Task.getTask = async(id, result) =>{
  const data = await db_cont.execute('SELECT * FROM tasks WHERE id = ?', [id], (err, res) =>{
    console.log("Task fetched successfuly");
    result(res, err);
  })    
} 

//delete task 
Task.deleteTask = async(id, result) =>{
  const data = await db_cont.execute('DELETE FROM tasks WHERE id = ?', [id],( err, res) =>{
    console.log("Delete query ran successfuly");
    result(res.affectedRows, err);
  })    
}


module.exports = Task;