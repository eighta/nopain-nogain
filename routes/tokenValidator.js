const jwt = require('jsonwebtoken');
const Settings = require("../config/settings");
var express = require('express');
const rutasProtegidas = express.Router(); 
rutasProtegidas.use((req, res, next) => {
    const token = req.headers['access-token'];
 
    if (token) {
      jwt.verify(token, Settings['llave'], (err, decoded) => {      
        if (err) {
          return res.status(401).json({ mensaje: 'Token inválido' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.status(401).send({ 
          mensaje: 'Token no proveído.' 
      });
    }
 });

 module.exports = rutasProtegidas;