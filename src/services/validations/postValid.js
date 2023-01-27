const { postSchema: { postPattern } } = require('../../schemas');
const { Category } = require('../../models');

async function validateNewPost(newPost) {
  const { error } = postPattern.validate(newPost);
  if (error) {
    return { errorCode: 400, message: error.message };
  }
  const categoriesPromises = newPost.categoryIds
    .map((categoryId) => Category.findByPk(categoryId));

  const categoriesValidation = await Promise.all(categoriesPromises);

  const categoriesAreValid = categoriesValidation
    .every((category) => category);

  if (!categoriesAreValid) {
    return { errorCode: 400, message: 'one or more "categoryIds" not found' };
  }
  
  return { errorCode: null, message: null };
}

module.exports = {
  validateNewPost,
};
