const { loginValid } = require('./validations');
const { tokenManagement } = require('../utils');

async function generateToken(loginData) {
  const validationResponse = await loginValid.validateLogin(loginData);
  if (validationResponse.errorCode) {
    return validationResponse;
  }
  const token = tokenManagement.encode(loginData);
  return {
    errorCode: null,
    message: token,
  };
}

module.exports = {
  generateToken,
};
