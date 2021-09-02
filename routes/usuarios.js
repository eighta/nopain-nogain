var express = require('express');
var router = express.Router();

const tokenValidator = require('./tokenValidator');
const usuariosController = require('../controllers/usuariosController'); 

router.get('/', tokenValidator, usuariosController.usuarios_list);
router.post('/', usuariosController.usuarios_create);

module.exports = router;