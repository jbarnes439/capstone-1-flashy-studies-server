/* eslint-disable quotes */
const knex = require('knex');
const app = require('../src/app');
const { makePmQuestionsArray } = require('./premade.fixtures')


describe(`Premade_questions service object`, function() {
  let db;

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    });
    app.set('db', db);
  });

  after('disconnect from db', () => db.destroy());

  before('clean the table', () => db.raw('TRUNCATE premade_questions, premade_answers RESTART IDENTITY CASCADE'));
  
  afterEach('cleanup', () =>  db.raw('TRUNCATE premade_questions, premade_answers RESTART IDENTITY CASCADE'));
  
  describe(`GET /api/preMadeQuestions`, () => {
    context(`Given no questions`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app)
          .get('/api/preMadeQuestions')
          .expect(200, []);
      });
    });

    context(`Given there are questions in the database`, () => {
      const testQuestions = makePmQuestionsArray();
      
      beforeEach('insert questions', () => {
        return db
          .into('premade_questions')
          .insert(testQuestions);          
      });

      it('responds with 200 and all of the questions', () => {
        return supertest(app)
          .get('/api/preMadeQuestions')
          .expect(200, testQuestions);
      });
    });
  });

  describe(`GET /api/preMadeQuestions/:question_id`, () => {
    context(`Given no questions`, () => {
      it(`responds with 404`, () => {
        const questionId = 69;
        return supertest(app)
          .get(`/api/preMadeQuestions/${questionId}`)
          .expect(404, { error: { message: `Question id not found` } })
      });
    });

    context('Given there are questions in the database', () => {
      const testQuestions = makePmQuestionsArray();

      beforeEach('insert questions', () => {
        return db
          .into('premade_questions')
          .insert(testQuestions);
      });

      it('responds with 200 and the specified question', () => {
        const questionId = 4;
        const expectedQuestion = testQuestions[questionId - 1];
        return supertest(app)
          .get(`/api/preMadeQuestions/${questionId}`)
          .expect(200, expectedQuestion);
      });
      
      it('responds with 200 and questions by topic', () => {
        const questionTopic = 'jokes';
        const expectedQuestions = makePmQuestionsArray();
        return supertest(app)
          .get(`/api/preMadeQuestions/questions/${questionTopic}`)
          .expect(200, expectedQuestions);
      });
    });    
  });
});