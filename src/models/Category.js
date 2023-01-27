const { CATEGORIES_TABLE_NAME } = require('../utils/tableNames');

module.exports = (sequelize, DataTypes) => {
  const CATEGORY_MODEL_STRUCTURE = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    }
  };

  const CATEGORY_MODEL_OPTIONS = {
    tableName: CATEGORIES_TABLE_NAME,
    timestamps: false,
  }

  const Category = sequelize.define('Category', CATEGORY_MODEL_STRUCTURE, CATEGORY_MODEL_OPTIONS);

  return Category;
}
