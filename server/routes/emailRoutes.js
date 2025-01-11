const express = require('express');
const { saveFlow, getFlows } = require('../controllers/emailController');
const router = express.Router();

router.post('/flows', saveFlow);
router.get('/flows', getFlows);

module.exports = router;
