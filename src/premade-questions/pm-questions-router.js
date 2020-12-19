const express = require('express');
const pmQuestionService = require('./pm-question-service');

const pmQuestionsRouter = express.Router();

const serializePreMadeQuestion = preMadeQuestion => ({
  id: preMadeQuestion.id,
  question: preMadeQuestion.question,
  topic: preMadeQuestion.topic,
});

pmQuestionsRouter
  .route('/')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    pmQuestionService.getAllQuestions(knexInstance)
      .then(questions => {
        res.json(questions.map(question => serializePreMadeQuestion(question)));
      })
      .catch(next);
  });

pmQuestionsRouter
  .route('/:question_id')
  .all((req, res, next) => {
    pmQuestionService.getById(
      req.app.get('db'),
      req.params.question_id
    )
      .then(question => {
        if (!question) {
          return res.status(404).json({
            error: { message: 'Question id not found' }
          });
        }
        res.question = question;
        next();
      })
      .catch(next);
  })
  .get((req, res) => {
    res.json(serializePreMadeQuestion(res.question));
  });
  
module.exports = pmQuestionsRouter;