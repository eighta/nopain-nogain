var express = require('express');
var router = express.Router();

const tokenValidator = require('./tokenValidator');
const sedesController = require('../controllers/sedesController'); 

router.get('/', tokenValidator, sedesController.sedes_list);
router.post('/', tokenValidator, sedesController.sedes_create);

module.exports = router;