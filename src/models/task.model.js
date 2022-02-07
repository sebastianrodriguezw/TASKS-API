const db_cont = require('../../config/db.config');

var Task = (task) => {
    this.id = task.id;
    this.date = task.date;
    this.name = task.name;
    this.description = task.description;
    this.status = task.status;
}

//get all tasks
Task.getAllTaks = (result) =>{
    db_cont.query(`SELECT * FROM tasks`,( err, res) =>{
        if(err){
            console.log("Error while fetching tasks", err);
            result(null,err);
        }else{
            console.log("Taks fetched successfuly");
            result(null,res);
        }
    })
}

module.exports = Task;