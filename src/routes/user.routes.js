const express = require('express');
const { userCont } = require('../controllers');
const { validateToken } = require('../middlewares');

const userRouter = express.Router();

userRouter.get(
  '/',
  validateToken,
  userCont.requestAll,
);
userRouter.post(
  '/', 
  userCont.requestCreation,
);

module.exports = userRouter;