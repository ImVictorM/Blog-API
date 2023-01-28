const { POSTS_CATEGORIES_TABLE_NAME } = require('../utils/tableNames');

module.exports = (sequelize, DataTypes) => {
  const POST_CATEGORY_MODEL_STRUCTURE = {
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      primaryKey: true,
    },
  };

  const POST_CATEGORY_MODEL_OPTIONS = {
    tableName: POSTS_CATEGORIES_TABLE_NAME,
    underscored: true,
    timestamps: false,
  };

  const PostCategory = sequelize.define('PostCategory', POST_CATEGORY_MODEL_STRUCTURE, POST_CATEGORY_MODEL_OPTIONS);

  PostCategory.associate = ({ Category, BlogPost }) => {
    Category.belongsToMany(BlogPost, {
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'posts'
    });

    BlogPost.belongsToMany(Category, {
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories'
    });
  };

  return PostCategory;
}
