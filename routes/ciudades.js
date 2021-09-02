var express = require('express');
var router = express.Router();

const tokenValidator = require('./tokenValidator');
const ciudadController = require('../controllers/ciudadesController'); 

router.get('/', tokenValidator, ciudadController.ciudades_list);
router.post('/', tokenValidator, ciudadController.ciudades_create);
router.get('/:ciudadCode/sedes/:sedeCode/usuarios', tokenValidator, ciudadController.usuarios_por_sede);

module.exports = router;