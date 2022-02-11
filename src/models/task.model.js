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
    await db_cont.execute('SELECT * FROM tasks',( err, res) =>{
    console.log("Task fetched successfuly");
    result(res, err);
  })    
}

// create task 
Task.createTask = async(body, result, next) =>{
    await db_cont.execute('INSERT INTO tasks (date, name, description, status) VALUES (?, ?, ?, ?)', 
    [body.date, body.name, body.description, body.status],( err, res) =>{
      if(!err){
        result(res.affectedRows, null);
      }else{
        result(null, err);
      }
    
  })
}

// edit task 
Task.updateTask = async(body, params, result) =>{
  await db_cont.execute('UPDATE tasks SET date = ?, name = ?, description = ?, status = ? WHERE id = ?', 
  [body.date, body.name, body.description, body.status, params],( err, res) =>{
    if(!err){
      console.log("Task updated successfuly");
      result(res.affectedRows, null);
    }else{
      result(null, err);
    }
  
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
  await db_cont.execute('DELETE FROM tasks WHERE id = ?', [id],( err, res) =>{
    if(!res.affectedRows > 0){
      console.log("Nothing deleted");
      result(res.affectedRows, err);
    }else{
      console.log("Delete query ran successfuly");
      result(res.affectedRows, err);
    }
  })    
}


module.exports = Task;