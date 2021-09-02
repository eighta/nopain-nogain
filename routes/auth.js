var express = require('express');
var router = express.Router();

const authController = require('../controllers/authController'); 
router.post('/', authController.auth);

module.exports = router;