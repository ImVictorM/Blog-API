const Joi = require('joi');

const logginPattern = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).messages({
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});

module.exports = {
  logginPattern,
};
