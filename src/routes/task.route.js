const express = require('express');
const router = express.Router();

const taskController = require('../controllers/tasks.controller');

// get all tasks
router.get('/', taskController.getTaskList);

module.exports = router;