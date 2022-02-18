const UserModel = require('../models/user.model')
const TaskModel = require('../models/task.model')
const bcrypt = require('../bcrypt/bcrypt')
const jwt = require('jsonwebtoken')

//get user products
exports.get_user_tasks = (req, res) =>{
  if(req.cookies.jwt) { req.headers['authorization'] = req.cookies.jwt }

  TaskModel.get_user_tasks(req.params.id, req.headers['authorization'], (tasks, err) =>{
    if(!err){
      return res.status(200).json({
        status: 'success',
        data: tasks
      });
    }else{
      return res.status(400).json({
        status: 'aborted',
        error: err
      });
    }
  })
}

// sign up a user
exports.sign_upUser = async (req, res) =>{
  if(!req.body.username || !req.body.password){
    return res.status(404).json({
      status: 'forbidden',
      error: 'parameters username and password missing'
    });
  }else{
    bcrypt.encrypted(req.body).then(user => {
      UserModel.sign_upUser(user, (user, err) =>{
        if(!err) {
          res.header("Access-Control-Allow-Origin", "*");
          res.status(200).json({
            status: 'success',
            message: 'User created successfuly',
            user: user
          });
        }else{
          return res.status(400).json({
            status: 'aborted',
            error: err
          });
        }
      }) 
    })
  }
}

// sign in a user
exports.sign_inUser = (req, res) =>{
  if(!req.body.username || !req.body.password){
    return res.status(404).json({
      status: 'forbidden',
      error: 'parameters username and password missing'
    });
  }else{
    UserModel.sign_inUser(req.body, (user, err) =>{
      if(user){
        bcrypt.compare_password(req.body.password, user.password).then(user_is_valid => {

          if(user_is_valid){
            const id = user.id

            const token = jwt.sign({id: id},
              process.env.JWT_CREDENTIALS, {
                expiresIn: process.env.JWT_TIEMPO_EXPIRA
              })

            const cookiesOptions = {
              expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
              HttpOnly: true
            }

            res.cookie('jwt', token, cookiesOptions)
            return res.status(200).json({
              status: 'success',
              user_is_valid: user_is_valid,
              token: token,
              data: user    
            }); 
          }else{
            return res.status(200).json({
              status: 'failed',
              user_is_valid: user_is_valid
            }); 
          }
         
          

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

exports.log_outUser = (req, res) =>{
  res.clearCookie('jwt')
  return res.status(200).json({
    status: 'success',
    message: 'log out successfully'
  });
}