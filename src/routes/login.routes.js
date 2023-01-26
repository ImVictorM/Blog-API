const express = require('express');
const { loginMidds } = require('../middlewares');
const { loginCont } = require('../controllers');

const loginRouter = express.Router();

loginRouter.post(
  '/', 
  loginMidds.validateLogin,
  loginCont.requestToken,
);

module.exports = loginRouter;