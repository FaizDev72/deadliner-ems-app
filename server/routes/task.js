const express = require('express');
const { createTask, revokeTask, getAllTaskofEmployee, updateTaskStatus } = require('../controllers/task/taskController');
const { isAdmin, auth } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/create', auth, isAdmin, createTask);
router.put('/:id/revoke', auth, isAdmin, revokeTask);
router.get('/employee/:empID', auth, isAdmin, getAllTaskofEmployee);
router.put('/:id/status', updateTaskStatus);

module.exports = router;