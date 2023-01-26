const { USERS_TABLE_NAME } = require('../utils/tableNames');

module.exports = (sequelize, DataTypes) => {
  const USER_MODEL_STRUCTURE = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  };

  const USER_MODEL_OPTIONS = {
    timestamps: false,
    tableName: USERS_TABLE_NAME,
  };

  const User = sequelize.define('User', USER_MODEL_STRUCTURE, USER_MODEL_OPTIONS);

  return User;
};