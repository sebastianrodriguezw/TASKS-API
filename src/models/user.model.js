const { User } = require('../../models');

var UserObj = (user) => {
  this.id = user.id;
  this.username = user.username;
  this.password = user.password;
}

// create user
UserObj.sign_upUser = async(user, result) =>{
  const { username, password } = user
  
  try{
    const user = await User.create({ username, password });
    result(user, null);
  }catch(err){
    result(null, err.parent.sqlMessage);
  }
} 

// get task by id
UserObj.sign_inUser = async(body, result) =>{
  console.log(body)
  try{
    const user = await User.findOne({ where: {
      username: body.username
    } });

    result(user, null);
  }catch (err) {
    console.log(err)
    result(null, err);
  }  
} 

  module.exports = UserObj;
