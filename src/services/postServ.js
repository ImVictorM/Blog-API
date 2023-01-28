const Sequelize = require('sequelize');
const { BlogPost, PostCategory, Category, User } = require('../models');
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

async function getAll() {
  const posts = await BlogPost.findAll({
    include: [
      {
        model: Category,
        through: { attributes: [] },
        as: 'categories',
      },
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
    ],
  });
  return { errorCode: null, message: posts };
}

async function getById(id) {
  const post = await BlogPost.findByPk(id, {
    include: [
      {
        model: Category,
        through: { attributes: [] },
        as: 'categories',
      },
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
    ],
  });
  if (!post) {
    return { errorCode: 404, message: 'Post does not exist' };
  }
  return { errorCode: null, message: post };
}

module.exports = {
  createInteraction,
  getAll,
  getById,
};
