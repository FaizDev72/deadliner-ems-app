const express = require('express');
const { createAgency } = require('../controllers/agency/agencyController');
const router = express.Router();

router.post('/create', createAgency);

module.exports = router;