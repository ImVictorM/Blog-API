const { categorySchema: { categoryPattern } } = require('../../schemas');

function validateNewCategory(newCategory) {
  const { error } = categoryPattern.validate(newCategory);
  if (error) {
    return {
      errorCode: 400,
      message: error.message,
    };
  }
  return {
    errorCode: null,
    message: null,
  };
}

module.exports = {
  validateNewCategory,
};
