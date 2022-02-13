const bcrypt = require('bcryptjs');
const { password } = require('../models/user.model');
const saltRounds = 10;

exports.encrypted = async (user) =>{ 
  const hashedPassword = await bcrypt.hash(user.password, saltRounds)

  return {
    username: user.username,
    password: hashedPassword
  }
}

exports.compare_password = async (password, hashpassword) => {
  const password_valid = bcrypt.compare(password, hashpassword)

  return password_valid
}
