const express = require('express');
const userFlashcardService = require('./user-flashcards-service');
const authRouter = require('../middleware/jwt-auth');

const userFlashcardRouter = express.Router();


userFlashcardRouter
    .all(authRouter)
    .route('/')
    .get((req, res, next) => {
        let userId = req.user.id;
        console.log(userId);

        const knexInstance = req.app.get('db');
        userFlashcardService.getAllUserFlashcards(knexInstance, userId)
            .then(flashcards => {
                res.json(flashcards)
            })
            .catch(next)
    })

    .post((req, res, next) => {
        const { question, answer, userId } = req.body;
        const newFlashcard = { question, answer };
        user_id = userId;
        userFlashcardService.insertUserFlashcard(
            req.app.get('db'),

            userFlashcardService.serializeUserFlashcard(newFlashcard)
        )
            .then(flashcard => {
                res
                    .status(201)
                    .json(flashcard)
            })
            .catch(next)
    })

module.exports = userFlashcardRouter;