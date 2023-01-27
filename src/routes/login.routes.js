const express = require('express');
const { loginCont } = require('../controllers');

const loginRouter = express.Router();

loginRouter.post(
  '/', 
  loginCont.requestToken,
);

module.exports = loginRouter;