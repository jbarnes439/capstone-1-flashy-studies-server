const express = require('express');
const pmAnswerService = require('./pm-answer-service');

const pmAnswersRouter = express.Router();

const serializePreMadeAnswer = preMadeAnswer => ({
  id: preMadeAnswer.id,
  answer: preMadeAnswer.answer,
  question_id: preMadeAnswer.question_id,
  correct: preMadeAnswer.correct
});

pmAnswersRouter
  .route('/')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    pmAnswerService.getAllAnswers(knexInstance)
      .then(answers => {
        res.json(answers.map(serializePreMadeAnswer));
      })
      .catch(next);
  });

pmAnswersRouter
  .route('/question/:question_id')
  .all((req, res, next) => {
    pmAnswerService.getAnswersByQuestionId(
      req.app.get('db'),
      req.params.question_id
    )
      .then(answers => {
        if (answers.length === 0) {
          return res.status(404).json({
            error: { message: 'Question id not found' }
          });
        }
        res.answers = answers;
        next();
      })
      .catch(next);
  })
  .get((req, res) => {
    res.json(res.answers);
  });

pmAnswersRouter
  .route('/correct')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    pmAnswerService.getCorrectAnswers(knexInstance)
      .then(answers => {
        res.json(answers.map(serializePreMadeAnswer));
      })
      .catch(next);
  });


module.exports = pmAnswersRouter;

