/* eslint-disable quotes */
const express = require('express');
const UserInfoService = require('./user-info-service');

const userInfoRouter = express.Router();

const serializeUser = user => ({
  id: user.id,
  username: user.username
});

userInfoRouter
  .route('/:user_id')
  .all((req, res, next) => {
    UserInfoService.getUserById(
      req.app.get('db'),
      req.params.user_id
    )
      .then(user => {
        if (!user) {
          return res.status(404).json({
            error: { message: `User id not found` }
          });
        }
        res.user = user;
        next();
      })
      .catch(next);
  })
  .get((req, res) => {
    res.json(serializeUser(res.user));
  });

module.exports = userInfoRouter;