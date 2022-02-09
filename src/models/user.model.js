const db_cont = require('../../config/db.config');

var User = (user) => {
  this.id = user.id;
  this.username = user.username;
  this.password = user.password;
}

// get task by id
User.getUser = async(user, result) =>{
  await db_cont.execute('SELECT * FROM users WHERE username = ? and password = ?', [user.username,
    user.password], (err, res) =>{
      result(res, err);
  })    
} 

  module.exports = User;
