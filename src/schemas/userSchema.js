const Joi = require('joi');

const userPattern = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email(),
  password: Joi.string().min(6),
  image: Joi.string(),
});

module.exports = {
  userPattern,
};
