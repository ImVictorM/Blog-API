const express = require('express');
const { validateToken } = require('../middlewares');
const { postCont } = require('../controllers');

const postRouter = express.Router();

postRouter.post(
  '/',
  validateToken,
  postCont.requestCreation,
);

module.exports = postRouter;