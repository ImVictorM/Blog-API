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

async function getById(id) {
  const response = await User.findByPk(id);
  if (!response) {
    return {
      errorCode: 404,
      message: 'User does not exist',
    };
  }
  const { dataValues: user } = response;
  delete user.password;
  return {
    errorCode: null,
    message: user,
  };
}

async function getByEmail(email) {
  const { dataValues: user } = await User.findOne({
    where: {
      email,
    },
    attributes: {
      exclude: ['password', 'email'],
    },
  });
  return {
    errorCode: null,
    message: user,
  };
} 

module.exports = {
  createInteraction,
  getAll,
  getById,
  getByEmail,
};