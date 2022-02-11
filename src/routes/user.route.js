const express = require('express');
const router = express.Router();

const userController = require('../controllers/users.controller');

// route for create user
router.get('/sign_in', userController.getUser);

// route for get user by id
router.post('/sign_up', userController.createUser);

module.exports = router;