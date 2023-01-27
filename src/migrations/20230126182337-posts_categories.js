'use strict';
const { 
  POSTS_CATEGORIES_TABLE_NAME, 
  BLOG_POSTS_TABLE_NAME,
  CATEGORIES_TABLE_NAME,
} = require('../utils/tableNames');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(POSTS_CATEGORIES_TABLE_NAME, {
      post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: BLOG_POSTS_TABLE_NAME,
          key: 'id',
        },
        primaryKey: true,
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: CATEGORIES_TABLE_NAME,
          key: 'id',
        },
        primaryKey: true,
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable(POSTS_CATEGORIES_TABLE_NAME);
  }
};
