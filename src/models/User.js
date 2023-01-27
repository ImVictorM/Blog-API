const { USERS_TABLE_NAME } = require('../utils/tableNames');

module.exports = (sequelize, DataTypes) => {
  const USER_MODEL_STRUCTURE = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  };

  const USER_MODEL_OPTIONS = {
    timestamps: false,
    tableName: USERS_TABLE_NAME,
    underscored: true,
  };

  const User = sequelize.define('User', USER_MODEL_STRUCTURE, USER_MODEL_OPTIONS);

  User.associate = ({ BlogPost }) => {
    User.hasMany(BlogPost, {
      foreignKey: 'user_id',
      as: 'blogPosts',
    });
  };

  return User;
};
