const express = require('express');
const router = express.Router();

const taskController = require('../controllers/tasks.controller');
const authController = require('../controllers/auth.controller');

/*
// route for get all tasks
router.get('/', authController.isAuthenticated, taskController.getTaskList);
*/
// route for create task
router.post('/create', authController.isAuthenticated, taskController.createTask);

// route for get task by id
router.get('/:id', authController.isAuthenticated, taskController.getTask);

// route for delete task
router.delete('/:id/delete', authController.isAuthenticated, taskController.deleteTask);

// route for edit task
router.put('/:id/update', authController.isAuthenticated, taskController.updateTask);

module.exports = router;