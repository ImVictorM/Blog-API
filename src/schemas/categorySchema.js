const Joi = require('joi');

const categoryPattern = Joi.object({
  name: Joi.string().required(),
});

module.exports = {
  categoryPattern,
};
