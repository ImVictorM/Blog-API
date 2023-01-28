const { BLOG_POSTS_TABLE_NAME } = require('../utils/tableNames');

module.exports = (sequelize, DataTypes) => {
  const BLOG_POST_MODEL_STRUCTURE = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    published: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  };

  const BLOG_POST_MODEL_OPTIONS = {
    tableName: BLOG_POSTS_TABLE_NAME,
    timestamps: false,
    underscored: true,
  };

  const BlogPost = sequelize.define('BlogPost', BLOG_POST_MODEL_STRUCTURE, BLOG_POST_MODEL_OPTIONS);

  BlogPost.associate = ({ User }) => {
    BlogPost.belongsTo(User, {
      foreignKey: 'userId',
      as: 'user'
    });
  };

  return BlogPost;
}
