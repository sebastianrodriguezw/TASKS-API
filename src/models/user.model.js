const db_cont = require('../../config/db.config');

var User = (user) => {
  this.id = user.id;
  this.username = user.username;
  this.password = user.password;
}

// create user
User.sign_upUser = async(user, result) =>{
  await db_cont.execute('INSERT INTO users (username, password) VALUES (?, ?)', 
  [user.username, user.password],(err, res) =>{
    if(err){
      result(null, err);
    }else{
      console.log("User created successfuly");
      result(res.affectedRows, err);
    }
})    
} 

// get task by id
User.sign_inUser = async(user, result) =>{
  await db_cont.execute('SELECT * FROM users WHERE username = ?', 
    [user.username], (err, res) =>{
      result(res, err);
  })    
} 

  module.exports = User;
