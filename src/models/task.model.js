const db_cont = require('../../config/db.config');

var Task = (task) => {
    this.id = task.id;
    this.date = task.date;
    this.name = task.name;
    this.description = task.description;
    this.status = task.status;
}

//get all tasks
Task.getAllTasks = async(result) =>{
    await db_cont.execute('SELECT * FROM tasks',( err, res) =>{
        if(err){
            console.log("Error while fetching tasks", err);
            result(null, err);
        }else{
            console.log("Tasks fetched successfuly");
            result(res, err);
        }
    })
}

Task.getTask = async(id, result) =>{
    await db_cont.execute('SELECT * FROM tasks where id = ?', [id], ( err, res) =>{
        if(err){
            console.log("Error while fetching tasks", err);
            result(null, err);
        }else{
            console.log("Task fetched successfuly");
            result(res, err);
        }
    })
} 

module.exports = Task;