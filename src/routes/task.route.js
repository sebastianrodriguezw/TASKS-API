const express = require('express');
const router = express.Router();

const taskController = require('../controllers/tasks.controller');
const authController = require('../controllers/auth.controller');

// route for get all tasks
router.get('/', taskController.getTaskList, authController.isAuthenticated);

// route for create task
router.post('/create', taskController.createTask, authController.isAuthenticated);

// route for get task by id
router.get('/:id', taskController.getTask, authController.isAuthenticated);

// route for delete task
router.delete('/:id/delete', taskController.deleteTask, authController.isAuthenticated);

// route for edit task
router.post('/:id/update', taskController.updateTask, authController.isAuthenticated);

module.exports = router;