const express = require('express');
const { loginMidds } = require('../middlewares');

const loginRouter = express.Router();

loginRouter.post(
  '/', 
  loginMidds.validateLogin,
);

module.exports = loginRouter;