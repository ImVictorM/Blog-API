const { postSchema: { postPattern, updatePostPattern } } = require('../../schemas');
const { Category, BlogPost } = require('../../models');

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

async function validatePostUpdate(postId, userId, updatedPost) {
  const { error } = updatePostPattern.validate(updatedPost);
  if (error) {
    return { errorCode: 400, message: error.message };
  }

  const post = await BlogPost.findByPk(postId, {
    attributes: ['user_id'],
  });

  if (!post) {
    return { errorCode: 404, message: 'Post does not exist' };
  }
  const { dataValues: { user_id: postUserId } } = post;

  if (Number(postUserId) !== Number(userId)) {
    return { errorCode: 401, message: 'Unauthorized user' };
  }

  return { errorCode: null, message: null };
}

module.exports = {
  validateNewPost,
  validatePostUpdate,
};
