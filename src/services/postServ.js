const Sequelize = require('sequelize');
const { BlogPost, PostCategory } = require('../models');
const config = require('../config/config');
const { postValid } = require('./validations');

const { NODE_ENV } = process.env;

const sequelize = new Sequelize(config[NODE_ENV]);

async function createInteraction(newPost, userId) {
  const { title, content, categoryIds } = newPost;
  const validationResponse = await postValid.validateNewPost(newPost);
  if (validationResponse.errorCode) return validationResponse;

  try {
    const transactionResult = await sequelize.transaction(async (current) => {
      const { dataValues } = await BlogPost
        .create({ title, content, userId }, { transaction: current });
      const { id: postId } = dataValues;
      const postCategoryPromises = categoryIds
        .map((categoryId) => PostCategory.create({ categoryId, postId }, { transaction: current }));
      await Promise.all(postCategoryPromises);
      return { errorCode: null, message: { ...dataValues } };
    });
    return transactionResult;
  } catch (error) {
    console.error(error);
    return { errorCode: 500, message: error.message };
  }
}

module.exports = {
  createInteraction,
};
