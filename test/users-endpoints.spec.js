/* eslint-disable quotes */
const knex = require('knex');
const app = require('../src/app');
const { makeUsersArray } = require('./user.fixtures');

describe.skip('Users Endpoints', function() {
  let db;

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    });
    app.set('db', db);
  });

  after('disconnect from db', () => db.destroy());

  before('cleanup', () => db.raw('TRUNCATE users RESTART IDENTITY CASCADE'));

  afterEach('cleanup', () => db.raw('TRUNCATE users RESTART IDENTITY CASCADE'));

  describe(`POST /api/users`, () => {
    
  })
})