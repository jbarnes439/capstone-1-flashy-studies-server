const { expect } = require('chai');
const knex = require('knex');
const app = require('../src/app');
const { makeUserflashcardArray } = require('./user.fixtures');

describe.only(`UserFlashcards service object`, function() {
    let db;

    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DATABASE_URL,
        });
        app.set('db', db);
    });

    after('disconnect from db', () => db.destroy());

    before('clean the table', () => db.raw('TRUNCATE user_flashcards RESTART IDENTITY CASCADE'));

    afterEach('cleanup', () => db.raw('TRUNCATE user_flashcards RESTART IDENTITY CASCADE'));

    describe(`GET /api/user-flashcards`, () => {
        context(`Given no flashcards`, () => {
            it(`responds with 200 and an empty list`, () => {
                return supertest(app)
                    .get('/api/user-flashcards')
                    .expect(200, [])
            });
        })
    })

    describe.only(`POST /api/flashcards/`, () => {
        it(`creates an flashcard, responding with 201 and the new flashcard`, function() {
            const newFlashcard = {                
                question: 'What did the fish say when it ran into a wall?',
                answer: 'dam',                
            }
            return supertest(app)
                .post('/api/flashcards/')
                .send(newFlashcard)
                .expect(201)
                .expect(res => {
                    expect(res.body.question).to.eql(newFlashcard.question)
                    expect(res.body.answer).to.eql(newFlashcard.answer)
                    expect(res.body).to.have.property('id')
                })
        })
    })
})