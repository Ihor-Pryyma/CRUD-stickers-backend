const request = require('supertest');
const expect = require('chai').expect;

const knex = require('../db/knex');
const fixtures = require('./fixture');
const app = require('../app');


describe('CRUD Stickers', () => {
  before((done) => {
    // run migrations and seeds
    knex.migrate.latest()
      .then(() => {
        return knex.seed.run();
      }).then(() => done());
  });

  it('Lists all Records', (done) => {
    request(app)
      .get('/api/v1/stickers')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('array');
        expect(response.body).to.deep.equal(fixtures.stickers);
        done();
      });
  });
});