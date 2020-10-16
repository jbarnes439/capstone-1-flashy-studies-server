/* eslint-disable quotes */
const knex = require('knex');
const app = require('../src/app');
const { makePmQuestionsArray, makePmAnswersArray } = require('./premade.fixtures');


describe(`Premade_Answers service object`, function () {
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

  afterEach('cleanup', () => db.raw('TRUNCATE premade_questions, premade_answers RESTART IDENTITY CASCADE'));

  describe(`GET /api/preMadeAnswers`, () => {
    context(`Given no answers`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app)
          .get('/api/preMadeAnswers')
          .expect(200, []);
      });
    });

    context(`Given there are answers in the database`, () => {
      const testQuestions = makePmQuestionsArray();
      const testAnswers = makePmAnswersArray();

      beforeEach('insert questions and answers', () => {
        return db
          .into('premade_questions')
          .insert(testQuestions)
          .then(() => {
            return db
              .into('premade_answers')
              .insert(testAnswers);
          });
      });

      it('responds with 200 and all of the answers', () => {
        return supertest(app)
          .get('/api/preMadeAnswers')
          .expect(200, testAnswers);
      });
    });
  });

  describe(`GET /api/preMadeAnswers/question/question_id`, () => {
    context('Given there are no answers in the database', () => {
      const testQuestions = makePmQuestionsArray();

      beforeEach('insert questions to avoid fk error', () => {
        return db
          .into('premade_questions')
          .insert(testQuestions);
      });

      it(`responds with 404 and error message when the question isn't in the database`, () => {
        const questionId = 72;

        return supertest(app)
          .get(`/api/preMadeAnswers/question/${questionId}`)
          .expect(404, `{"error":{"message":"Question id not found"}}`);
      });
    });

    context('Given there are answers in the database', () => {
      const testQuestions = makePmQuestionsArray();
      const testAnswers = makePmAnswersArray();

      beforeEach('insert questions and answers', () => {
        return db
          .into('premade_questions')
          .insert(testQuestions)
          .then(() => {
            return db
              .into('premade_answers')
              .insert(testAnswers);
          });
      });

      it('responds 200 and an array of answers for the specified question', () => {
        const questionId = 3;
        const testAnswers = [
          {
            id: 9,
            answer: 'Please stop',
            correct: false,
            question_id: 3,
          },
          {
            id: 10,
            answer: 'I cannot take anymore bad jokes',
            correct: false,
            question_id: 3,
          },
          {
            id: 11,
            answer: 'The hip doctor!',
            correct: true,
            question_id: 3,
          },
          {
            id: 12,
            answer: 'Worst joke yet',
            correct: false,
            question_id: 3,
          },
        ];

        return supertest(app)
          .get(`/api/preMadeAnswers/question/${questionId}`)
          .expect(200, testAnswers);
      });
    });
  });
});