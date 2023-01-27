const { User } = require('../../models');
const { loginSchema: { logginPattern } } = require('../../schemas');

async function validateLogin(loginData) {
  const { error } = logginPattern.validate(loginData);
  if (error) {
    return { errorCode: 400, message: error.message };
  }
  const userExists = await User.findOne({
    where: {
      email: loginData.email,
      password: loginData.password,
    },
  });

  if (!userExists) {
    return { errorCode: 400, message: 'Invalid fields' };
  }

  return { errorCode: null, message: null };
}

module.exports = {
  validateLogin,
};
