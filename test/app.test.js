const knex = require('../db/knex');

describe('CRUD Stickers', () => {
  before(() => {
    // run migrations and seeds
    knex.migrate.latest()
      .then(() => {
        return knex.seed.run();
      });
  })
});