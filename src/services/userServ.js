const { User } = require('../models');
const { tokenManagement } = require('../utils');
const { userValid } = require('./validations');

async function createInteraction(newUser) {
  const validationResponse = await userValid.validateNewUser(newUser);
  if (validationResponse.errorCode) {
    return validationResponse;
  }
  const { dataValues } = await User.create(newUser);
  const userToken = tokenManagement.encode(dataValues);
  return {
    errorCode: null,
    message: userToken,
  };
}

module.exports = {
  createInteraction,
};