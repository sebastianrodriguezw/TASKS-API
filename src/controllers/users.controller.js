const UserModel = require('../models/user.model')
const Validator = require('../validates/validate_user')

// get specific user
exports.getUser = (req, res) =>{
    UserModel.getUser(req.body, (user, err) =>{

      if (user.length > 0) {
        return res.status(200).json({
          status: 'success',
          data: user
        });
      }  else{
        return res.status(404).json({
          status: 'forbidden',
          error: 'This user not exits'
        });
      }
    })
  }
  