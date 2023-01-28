const express = require('express');
const { validateToken } = require('../middlewares');
const { postCont } = require('../controllers');

const postRouter = express.Router();

postRouter.get(
  '/',
  validateToken,
  postCont.requestAll,
);
postRouter.get(
  '/:id',
  validateToken,
  postCont.requestById,
);
postRouter.post(
  '/',
  validateToken,
  postCont.requestCreation,
);

module.exports = postRouter;