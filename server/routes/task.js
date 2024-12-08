const express = require('express');
const { createTask, revokeTask, getAllTaskofEmployee, updateTaskStatus } = require('../controllers/task/taskController');
const router = express.Router();

router.post('/create', createTask);
router.put('/:id/revoke', revokeTask);
router.get('/employee/:empID', getAllTaskofEmployee);
router.put('/:id/status', updateTaskStatus);

module.exports = router;