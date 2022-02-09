const express = require('express');
const router = express.Router();

const userController = require('../controllers/users.controller');

// route for get task by id
router.post('/', userController.getUser);

module.exports = router;