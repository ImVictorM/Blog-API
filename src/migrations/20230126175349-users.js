'use strict';
const { USERS_TABLE_NAME } = require('../utils/tableNames');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(USERS_TABLE_NAME, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      display_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable(USERS_TABLE_NAME);
  }
};
