const { userSchema: { userPattern } } = require('../../schemas');
const { User } = require('../../models');

async function validateNewUser(newUser) {
  const { error } = userPattern.validate(newUser);
  if (error) {
    return { errorCode: 400, message: error.message };
  }

  const userNotValid = await User.findOne({
    where: {
      email: newUser.email,
    },
  });

  if (userNotValid) {
    return { errorCode: 409, message: 'User already registered' };
  }
  return { errorCode: null, message: null };
}

module.exports = {
  validateNewUser,
};
