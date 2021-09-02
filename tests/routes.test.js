const request = require('supertest')
const app = require('../app')

// Before any tests run, clear the DB and run migrations with Sequelize sync()
beforeAll(async () => {
  const Models = require("../models/");
  await Models.sequelize.sync({ force: true })
})

describe('Authentication', () => {
  it('should get token', async () => {
    const resAuth = await request(app)
      .post('/auth/')
      .set('Content-Type',  'application/json')
      .send({
        username: 'admin',
        password: 'pass',
      })
    expect(resAuth.statusCode).toEqual(200)

  })
})

describe('Post Endpoints', () => {
  it('should create entities', async () => {

    // auth token
    const resAuth = await request(app)
      .post('/auth/')
      .set('Content-Type',  'application/json')
      .send({
        username: 'admin',
        password: 'pass',
      })

    const resCiudad = await request(app)
      .post('/ciudades/')
      .set('access-token', resAuth.body.token) 
      .set('Content-Type',  'application/json')
      .send({
        code: 'BAQ',
        name: 'Barranquilla',
      })
    expect(resCiudad.statusCode).toEqual(201)

    const resSede = await request(app)
      .post('/sedes/')
      .set('access-token', resAuth.body.token) 
      .set('Content-Type',  'application/json')
      .send({
        code: 'FUT',
        name: 'Estadio de Futbol',
        ciudad_code: 'BAQ'
      })
    expect(resSede.statusCode).toEqual(201)

    const resUsuario = await request(app)
      .post('/usuarios/')      
      .set('Content-Type',  'application/json')
      .send({
        identification: '123TEST',
        name: 'Usuario de Prueba',
        ciudad_code: 'BAQ',
        sede_code: 'FUT'
      })
    expect(resUsuario.statusCode).toEqual(201)
  })
})

describe('Usuario already exist', () => {
  it('should return a conflict (HTTP status code: 409)', async () => {
    const resUsuario1 = await request(app)
    .post('/usuarios/')    
    .set('Content-Type',  'application/json')
    .send({
      identification: '90909090',
      name: 'Usuario existente',
      ciudad_code: 'BAQ',
      sede_code: 'FUT'
    })

    const resUsuario2 = await request(app)
    .post('/usuarios/')    
    .set('Content-Type',  'application/json')
    .send({
      identification: '90909090',
      name: 'Usuario existente',
      ciudad_code: 'BAQ',
      sede_code: 'FUT'
    })
  expect(resUsuario2.statusCode).toEqual(409)

  })
})