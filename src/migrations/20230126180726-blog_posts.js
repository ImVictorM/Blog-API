'use strict';
const { BLOG_POSTS_TABLE_NAME, USERS_TABLE_NAME } = require('../utils/tableNames');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(BLOG_POSTS_TABLE_NAME, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: USERS_TABLE_NAME,
          key: 'id',
        }
      },
      published: {
        type: Sequelize.DATE,
      },
      updated: {
        type: Sequelize.DATE,
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable(BLOG_POSTS_TABLE_NAME);
  }
};
