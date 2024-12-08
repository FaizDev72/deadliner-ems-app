const express = require('express');
const { sendOTP, userLogin } = require('../controllers/employee/authController');
const { createEmployee, getAllEmployees, updateEmployee, getEmployee, deleteEmployee } = require('../controllers/employee/employeeController');
const router = express.Router();


router.post('/sendotp', sendOTP);
router.post('/login', userLogin);


router.post('/create', createEmployee);
router.get('/all', getAllEmployees);
router.get('/:id', getEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router;