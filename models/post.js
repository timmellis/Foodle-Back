'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // USER ASSOCIATION: BELONGS-TO
      Post.belongsTo(models.User, {
        foreignKey: 'userId'
      })

      // COMMENT ASSOCIATION: HAS-MANY 
      Post.hasMany(models.Comment, {
        foreignKey: 'postId'
      })
    }
  }
  Post.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    recipeUrl: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts'
  });
  return Post;
};