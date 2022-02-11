const express = require('express');
const router = express.Router();

const userController = require('../controllers/users.controller');

// route for create user
router.post('/sign_in', userController.sign_inUser);

// route for get user by id
router.post('/sign_up', userController.sign_upUser);

// log out user
router.get('/log_out', userController.log_outUser);

module.exports = router;