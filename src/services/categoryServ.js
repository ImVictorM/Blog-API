const { Category } = require('../models');
const { categoryValid } = require('./validations');

async function createInteraction(newCategory) {
  const validationResponse = categoryValid.validateNewCategory(newCategory);
  if (validationResponse.errorCode) {
    return validationResponse;
  }
  const { dataValues } = await Category.create(newCategory);
  return {
    errorCode: null,
    message: dataValues,
  };
}

async function getAll() {
  const categories = await Category.findAll();
  return {
    errorCode: null,
    message: categories,
  };
}

module.exports = {
  createInteraction,
  getAll,
};
