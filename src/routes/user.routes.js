const express = require('express');
const { userCont } = require('../controllers');
const { validateToken } = require('../middlewares');

const userRouter = express.Router();

userRouter.get(
  '/',
  validateToken,
  userCont.requestAll,
);
userRouter.get(
  '/:id',
  validateToken,
  userCont.requestById,
);
userRouter.post(
  '/', 
  userCont.requestCreation,
);

module.exports = userRouter;