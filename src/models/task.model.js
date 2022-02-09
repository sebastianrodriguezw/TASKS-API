const db_cont = require('../../config/db.config');

var Task = (task) => {
  this.id = task.id;
  this.date = task.date;
  this.name = task.name;
  this.description = task.description;
  this.status = task.status;
}

// get all tasks
Task.getAllTasks = async(result) =>{
  const data = await db_cont.execute('SELECT * FROM tasks',( err, res) =>{
    console.log("Task fetched successfuly");
    result(res, err);
  })    
}

// create task 
Task.createTask = async(body, result, next) =>{
 console.log(body)
    await db_cont.execute('INSERT INTO tasks (date, name, description, status) VALUES (?, ?, ?, ?)', 
    [body.date, body.name, body.description, body.status],( err, res) =>{
      console.log("Task created successfuly");
      result(res.affectedRows, err);
  })

}

// get task by id
Task.getTask = async(id, result) =>{
  await db_cont.execute('SELECT * FROM tasks WHERE id = ?', [id], (err, res) =>{
    if (err) throw err;
    console.log("Task fetched successfuly");
    result(res, err);
  })    
} 

// delete task 
Task.deleteTask = async(id, result) =>{
  const data = await db_cont.execute('DELETE FROM tasks WHERE id = ?', [id],( err, res) =>{
    console.log("Delete query ran successfuly");
    result(res.affectedRows, err);
  })    
}


module.exports = Task;