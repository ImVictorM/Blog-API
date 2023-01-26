const { User } = require('../models');
const { tokenManagement } = require('../utils');
const { userValid } = require('./validations');

async function createInteraction(newUser) {
  const validationResponse = await userValid.validateNewUser(newUser);
  if (validationResponse.errorCode) {
    return validationResponse;
  }

  const { dataValues } = await User.create(newUser);
  delete dataValues.password;
  const userToken = tokenManagement.encode(dataValues);

  return {
    errorCode: null,
    message: userToken,
  };
}

async function getAll() {
  const userList = await User.findAll();
  const userListWithoutPassword = userList.map(({ dataValues: { password, ...rest } }) => rest);
  return {
    errorCode: null,
    message: userListWithoutPassword,
  };
}

module.exports = {
  createInteraction,
  getAll,
};