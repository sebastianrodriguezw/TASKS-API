const express = require('express');
const router = express.Router();

const taskController = require('../controllers/tasks.controller');

// route for get all tasks
router.get('/', taskController.getTaskList);

// route for create task
router.post('/create', taskController.createTask);

// route for get task by id
router.get('/:id', taskController.getTask);

// route for delete task
router.delete('/:id/delete', taskController.deleteTask);

// route for edit task
router.post('/:id/update', taskController.updateTask);

module.exports = router;