const UserModel = require('../models/user.model')
const bcrypt = require('../bcrypt/bcrypt')

// create user
exports.createUser = async (req, res) =>{
  if(!req.body.username || !req.body.password){
    return res.status(404).json({
      status: 'forbidden',
      error: 'parameters username and password missing'
    });
  }else{
    bcrypt.encrypted(req.body).then(user => {
      UserModel.createUser(user, (rows_affected, err) =>{
        if(!err) {
          return res.status(200).json({
            status: 'success',
            message: 'User created successfuly'
          });
        }else{
          return res.status(400).json({
            status: 'aborted',
            error: err.sqlMessage
          });
        }
      }) 
    })
  }
}

// get specific user
exports.getUser = (req, res) =>{
    if(!req.body.username || !req.body.password){
      return res.status(404).json({
        status: 'forbidden',
        error: 'parameters username and password missing'
      });
    }else{
      UserModel.getUser(req.body, (user, err) =>{
        if(user.length > 0){
          bcrypt.compare_password(req.body.password, user[0].password).then(user_is_valid => {
            return res.status(200).json({
              status: (user_is_valid ? 'success' : 'failed'),
              user_is_valid: user_is_valid
            });
          })
        }else{
          return res.status(404).json({
            status: 'forbidden',
            error: 'This user not exist'
          });
        }
      }) 
    }
  
}
  