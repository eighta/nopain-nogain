var express = require('express');
var logger = require('morgan');

// Routers
const authRouter = require('./routes/auth');
const ciudadesRouter = require('./routes/ciudades');
const sedesRouter = require('./routes/sedes');
const usuariosRouter = require('./routes/usuarios');

// App Express SETUP
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authRouter);
app.use('/ciudades', ciudadesRouter);
app.use('/sedes', sedesRouter);
app.use('/usuarios', usuariosRouter);

module.exports = app;
