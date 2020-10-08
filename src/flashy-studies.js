require('dotenv').config();
const knex = require('knex');
const preMadeQuestionService = require('./premade-questions/pm-question-service');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL,
});

knexInstance('premade_answers')
  .select('*')
  .then(result => {
    console.log(result);
  });