const express = require('express');
const { categoryCont } = require('../controllers');
const { validateToken } = require('../middlewares');

const categoryRouter = express.Router();

categoryRouter.post(
  '/',
  validateToken,
  categoryCont.requestCreation,
);

module.exports = categoryRouter;
