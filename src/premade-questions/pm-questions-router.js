const express = require('express');
const pmQuestionService = require('./pm-question-service');

const pmQuestionsRouter = express.Router();

const serializePreMadeQuestion = preMadeQuestion => ({
  id: preMadeQuestion.id,
  question: preMadeQuestion.question,
  topic: preMadeQuestion.topic,
});

const serializeTopic = topic => ({
  topic: topic.topic
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
            error: { message: `Question id not found` }
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

pmQuestionsRouter
  .route('/questions/:topic')
  .all((req, res, next) => {
    pmQuestionService.getQuestionsByTopic(
      req.app.get('db'),
      req.params.topic
    )
      .then(questions => {
        if (questions.length === 0) {
          return res.status(404).json({
            error: { message: `topic not found` }
          });
        }
        res.questions = questions;
        next();
      })
      .catch(next);
  })
  .get((req, res) => {
    res.json(res.questions.map(question => serializePreMadeQuestion(question)));
  });

pmQuestionsRouter
  .route('/distinct/topics')
  .all((req, res, next) => {
    pmQuestionService.getAllTopics(req.app.get('db'))
      .then(topics => {
        if (!topics) {
          return res.status(404).json({
            error: { message: 'topic not found' }
          });
        }
        res.topics = topics;
        next();
      })
      .catch(next);
  })
  .get((req, res) => {
    res.json(res.topics.map(topic => serializeTopic(topic)));
  });



module.exports = pmQuestionsRouter;