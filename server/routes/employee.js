const express = require('express');
const { sendOTP, userLogin } = require('../controllers/employee/authController');
const { auth, isAdmin } = require('../middlewares/authMiddleware');
const { createEmployee, getAllEmployees, updateEmployee, getEmployee, deleteEmployee } = require('../controllers/employee/employeeController');
const router = express.Router();


router.post('/sendotp', sendOTP);
router.post('/login', userLogin);


router.post('/create', auth, isAdmin, createEmployee);
router.get('/all', auth, isAdmin, getAllEmployees);
router.get('/:id', auth, getEmployee);
router.put('/:id', auth, isAdmin, updateEmployee);
router.delete('/:id', auth, isAdmin, deleteEmployee);
``
module.exports = router;