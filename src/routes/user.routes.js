const express = require('express');
const { userCont } = require('../controllers');

const userRouter = express.Router();

userRouter.post(
  '/', 
  userCont.requestCreation,
);

module.exports = userRouter;