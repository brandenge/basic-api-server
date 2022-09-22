'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/models');
const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe('Testing Basic API Server', () => {

  test('Create a new clothing', async () => {
    const response = await request.post('/clothes').send({
      type: 'shirt',
      material: 'cotton',
      color: 'blue',
    });

    expect(response.status).toEqual(200);
    expect(response.body.type).toEqual('shirt');
    expect(response.body.material).toEqual('cotton');
    expect(response.body.color).toEqual('blue');
  });

  test('Read all the clothes', async () => {
    expect(true).toBe(false);
  });

  test('Read a clothing at a given id', async () => {
    expect(true).toBe(false);
  });

  test('Update a clothing at a given id', async () => {
    expect(true).toBe(false);
  });

  test('Delete a clothing at a given id', async () => {
    expect(true).toBe(false);
  });

  test('Create a new ingredient', async () => {
    const response = await request.post('/ingredients').send({
      name: 'apple',
      type: 'fruit',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('apple');
    expect(response.body.type).toEqual('fruit');
  });

  test('Read all the ingredients', async () => {
    expect(true).toBe(false);
  });

  test('Read an ingredient at a given id', async () => {
    expect(true).toBe(false);
  });

  test('Update an ingredient at a given id', async () => {
    expect(true).toBe(false);
  });

  test('Delete an ingredient at a given id', async () => {
    expect(true).toBe(false);
  });

});
