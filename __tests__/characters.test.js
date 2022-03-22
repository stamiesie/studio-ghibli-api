const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { execSync } = require('child_process');

describe('GET character routes', () => {
  // beforeAll(async done => {
  //   execSync('npm run setup-db');
  // setup DB before test
  beforeAll(() => {
    execSync('npm run setup-db');
  });

  afterAll(() => {
    pool.end();
  });

  it('GETs all characters', async () => {
    const response = await request(app)
      .get('/api/v1/characters');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));

    // the response body must equal an array of objects
    expect(response.body).toEqual(expect.arrayContaining([expect.any(Object)]));
  });

  it('GETs a single character by id', async () => {
    const response = await request(app)
      .get('/api/v1/characters/7');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
    expect(response.body.id).toBeDefined();
  });
});
