const { logginPattern } = require('../schemas/loginSchema');
const { User } = require('../models');
const { tokenManagement } = require('../utils');

async function validateLogin(req, res, _next) {
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

  const token = tokenManagement.encode(loginData);
  return res.status(200).json({ token });
}

module.exports = {
  validateLogin,
};
