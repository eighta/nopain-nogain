# nopain-nogain

Ejemplo de cómo implementar una RestAPI, donde se utiliza:
- Node.js
- Express
- Sequelize ORM
- sql lite
- jest
- supertest

# Execution

## install dependencies
npm install

## start server
> Linux
DEBUG=nopain-nogain:* npm start
> Windows (CommandLine)
set DEBUG=nopain-nogain:* & npm start
> Windows (PowerShell)
$env:DEBUG='nopain-nogain:*'; npm start

## testing
npm test