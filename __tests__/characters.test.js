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

  it('gets all characters from database', () => {
    return request(app)
      .get('/api/v1/characters')
      .then((res) => {
        expect(res.body).not.toBeNull();
      });
  });
});
