const { logginPattern } = require('../schemas/loginSchema');
const { User } = require('../models');

async function validateLogin(req, res, next) {
  const { body: loginData } = req;
  const { error } = logginPattern.validate(loginData);
  if (error) {
    return res.status(400).json({ message: error.message });
  }

  const userExists = await User.findOne({
    where: {
      email: loginData.email,
      password: loginData.password,
    },
  });

  if (!userExists) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  return next();
}

module.exports = {
  validateLogin,
};
